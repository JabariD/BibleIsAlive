/**
 * This file defines the ReadingScreen component.
 * The ReadingScreen component displays a Bible verse and recent posts.
 * It also includes a header and GPT icons.
 */

import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

// Custom Packages
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

// Components
import VerseComponent from "../components/VerseComponent";

// Bible API
import BibleAPI from "../apis/bible/BibleAPI";
import { bibleBookToNumberOfChaptersMap } from "../apis/bible/directory";


const text =
  "Then what is the advantage of the Jew? Or what is the benefit of circumcision? Great in every respect. To begin with, the Jews were entrusted with the oracles of God [His very words]. What then? If some did not believe or were unfaithful [to God], their lack of belief will not nullify and make invalid the faithfulness of God and His word, will it? Certainly not! Let God be found true [as He will be], though every person be found a liar, just as it is written [in Scripture], What then? Are we Jews any better off? No, not at all. For we have already charged that all, both Jews and Greeks, are under sin, as it is written:“None is righteous, no, not one;no one understands;no one seeks for God.All have turned aside; together they have become worthless;no one does good,not even one.”“Their throat is an open grave;they use their tongues to deceive.”“The venom of asps is under their lips.”“Their mouth is full of curses and bitterness.”“Their feet are swift to shed blood;in their paths are ruin and misery,and the way of peace they have not known.”“There is no fear of God before their eyes.”Now we know that whatever the law says it speaks to those who are under the law, so that every mouth may be stopped, and the whole world may be held accountable to God. For by works of the law no human being will be justified in his sight, since through the law comes knowledge of sin.";

interface UserPostProps { }
const UserPost: React.FC<UserPostProps> = () => {
  return (
    <SafeAreaView style={trendingPostsStyles.container}>
      {/* Image */}
      <SafeAreaView>
        <Image
          source={require("../assets/images/profile-image.png")}
          style={{ height: 40, width: 40, borderRadius: 30 }}
        ></Image>
      </SafeAreaView>
      {/* Icon Type + Views */}
      <SafeAreaView>
        <Text>💙 212k</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};


// TODO: Add some type of caching to avoid repeated calls to API. e.g. cache the results, check if data has changed.
export type Props = {};
const ReadingScreen: React.FC<Props> = () => {
  // On first render.
  useEffect(() => {
    fetchVerses();
  }, []);


  // References
  // ref for the bottom sheet modal
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // State
  // selectedVerses state is used to keep track of the verses selected by the user on tap
  const [selectedVerses, setSelectedVerses] = useState<number[]>([]);
  // searchText state is used to store the text entered by the user in the search bar
  const [searchText, setSearchText] = useState('');
  // isModalBiblePickerVisible state is used to control the visibility of the Bible Picker Modal
  const [isModalBiblePickerVisible, setModalBiblePickerVisible] = useState(false);
  // tempSelectedBook state is used to store the temporary book selected by the user in the Bible Picker Modal
  const [tempSelectedBook, setTempSelectedBook] = useState('Genesis');
  // tempSelectedChapter state is used to store the temporary chapter selected by the user in the Bible Picker Modal
  const [tempSelectedChapter, setTempSelectedChapter] = useState(1);
  // TODO: Use React's Context API to create a global state that persists across different screens. 
  // selectedBook state is used to store the book selected by the user in the Bible Picker Modal
  const [selectedBook, setSelectedBook] = useState('Genesis');
  // selectedChapter state is used to store the chapter selected by the user in the Bible Picker Modal
  const [selectedChapter, setSelectedChapter] = useState(1);
  // verses state is used to store the verses to display on Bible Screen.
  const [verses, setVerses] = useState<string[]>([]);

  const [noteName, setNoteName] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteTags, setNoteTags] = useState('');

  const [currentAction, setCurrentAction] = useState<string | null>(null);

  // Function to handle verse selection
  const handleVerseSelection = (selectedVerseNumber: number, selectedVerseContent: string) => {
    // Update the selected verses state
    setSelectedVerses(previousSelectedVerses => {
      let updatedSelectedVerses;
      // Check if the verse is already selected
      if (previousSelectedVerses.includes(selectedVerseNumber)) {
        // If the verse is already selected, remove it from the array
        updatedSelectedVerses = previousSelectedVerses.filter(verseNumber => verseNumber !== selectedVerseNumber);
      } else {
        // If the verse is not selected, add it to the array
        updatedSelectedVerses = [...previousSelectedVerses, selectedVerseNumber];
      }

      return updatedSelectedVerses;
    });

    // Perform additional processing...
  };

  // Function to toggle the visibility of the Bible Picker Modal
  const toggleModal = () => {
    setModalBiblePickerVisible(!isModalBiblePickerVisible);
  };

  // function to open the bottom sheet modal
  const openModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // function to close the bottom sheet modal
  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  // 
  useEffect(() => {
    if (selectedVerses.length > 0) {
      openModal();
    } else {
      closeModal();
    }
  }, [selectedVerses, openModal, closeModal]);

  // Function to handle the change of the selected book in the Bible Picker Modal
  const handleBookChange = (book: string) => {
    setTempSelectedBook(book);
    // Reset chapter selection when book changes
    setTempSelectedChapter(1);
  };

  // Function to handle the change of the selected chapter in the Bible Picker Modal
  const handleChapterChange = (chapter: number) => {
    setTempSelectedChapter(chapter);
  };

  // Function to fetch verses from the Bible API
  const fetchVerses = async () => {
    try {
      const response = await BibleAPI.getChapterVerses(selectedBook, selectedChapter);
      // Extract the 'text' property from each verse object in the 'verses' array
      const versesText = response.verses.map((verse: any) => verse.text.trim());
      setVerses(versesText);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the confirmation of the selection in the Bible Picker Modal
  const handleConfirmSelection = () => {
    setSelectedBook(tempSelectedBook);
    setSelectedChapter(tempSelectedChapter);
    fetchVerses();
    toggleModal();
  };

  // TODO: Save the note to a database.
  const handleConfirmNote = () => {
    // Here you can handle the note confirmation, e.g. save the note to a database
  };

  // Separate renderings
  const renderBiblePickerModal = () => {
    return (
      <Modal isVisible={isModalBiblePickerVisible} onBackdropPress={toggleModal}>
        <View style={stylesBibleSelectionModal.modalContent}>
          <Picker selectedValue={tempSelectedBook} onValueChange={handleBookChange}>
            {Array.from(bibleBookToNumberOfChaptersMap.keys()).map((book) => (
              <Picker.Item key={book} label={book} value={book} />
            ))}
          </Picker>
          <Picker selectedValue={tempSelectedChapter} onValueChange={handleChapterChange}>
            {/* 
               Create an array with a length equal to the number of chapters in the currently selected book.
               For each element in the array (representing a chapter), create a Picker.Item with a label and value equal to the chapter number (i + 1).
               This allows the user to select a chapter from the currently selected book.
            */}
            {Array.from({ length: bibleBookToNumberOfChaptersMap.get(tempSelectedBook) || 0 }).map((_, i) => (
              <Picker.Item key={i} label={String(i + 1)} value={i + 1} />
            ))}
          </Picker>
          <Button title="Close" onPress={toggleModal} />
          <Button title="Confirm" onPress={handleConfirmSelection} />
        </View>
      </Modal>
    );
  };

  // Function to render user posts
  const renderUserPosts = (count: number) => {
    // Create an array of UserPost components with a length equal to the count parameter
    return Array.from({ length: count }, (_, i) => <UserPost key={i} />);
  };

  const actionComponents: Record<string, JSX.Element> = {
    'Note': (
      <KeyboardAwareScrollView style={stylesActionComponents.container}>
        <Text style={stylesActionComponents.title}>Add a Note</Text>
        <TextInput
          style={stylesActionComponents.input}
          placeholder="Note Name"
          value={noteName}
          onChangeText={setNoteName}
        />
        <TextInput
          style={[stylesActionComponents.input, { height: 150 }]}
          placeholder="Note Content"
          value={noteContent}
          onChangeText={setNoteContent}
          multiline
        />
        <TextInput
          style={stylesActionComponents.input}
          placeholder="Tags"
          value={noteTags}
          onChangeText={setNoteTags}
        />
        <View style={stylesActionComponents.buttonContainer}>
          <Button title="Save" onPress={handleConfirmNote} color="#2196F3" />
          <Button title="Back" onPress={() => setCurrentAction(null)} color="#2196F3" />
        </View>
      </KeyboardAwareScrollView>
    ),
    // TODO: Add other actions here...
  };


  // Dynamic styles.
  // Calculate bottom padding based on whether the modal is open or not
  const bottomPadding = selectedVerses.length > 0 ? 200 : 0; // Adjust the value based on the height of your modal

  return (
    <>
      <BottomSheetModalProvider>
        <SafeAreaView style={[stylesScreen.container, { paddingBottom: bottomPadding }]}>
          {/* Search Bar */}
          <TextInput
            style={stylesHeader.searchBar}
            placeholder="Search for verse, topic, or subject."
            value={searchText}
            onChangeText={setSearchText}
          />

          {/* Header */}
          <SafeAreaView style={stylesHeader.bibleHeaderContainer}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={stylesHeader.bibleHeaderText}>{selectedBook} {selectedChapter}</Text>
            </TouchableOpacity>
            <Text style={stylesHeader.bibleHeaderText}>ESV</Text>
          </SafeAreaView>

          {/* Bible Picker Modal */}
          {renderBiblePickerModal()}

          {/* Bible Text and recent posts */}
          <ScrollView contentContainerStyle={{ paddingBottom: bottomPadding }}>
            <SafeAreaView style={stylesBibleTextAndRecentPosts.container}>
              {/* Text */}
              <SafeAreaView style={stylesBibleTextAndRecentPosts.bibleTextContainer}>
                <SafeAreaView style={stylesBibleTextAndRecentPosts.bibleTextContainer}>
                  {verses.map((verse, index) => (
                    <VerseComponent
                      key={index}
                      number={index + 1}
                      verse={verse}
                      onVerseSelect={() => handleVerseSelection(index + 1, verse)}
                      isSelected={selectedVerses.includes(index + 1)}
                    />
                  ))}
                </SafeAreaView>
              </SafeAreaView>
              {/* Recent Posts */}
              <SafeAreaView
                style={stylesBibleTextAndRecentPosts.recentPostsContainer}
              >
                {renderUserPosts(3)}
              </SafeAreaView>
            </SafeAreaView>
          </ScrollView>

          {/* GPT icons */}
          {selectedVerses.length === 0 && (
            <SafeAreaView style={stylesGPTIcons.iconContainer}>
              <TouchableOpacity>
                {/* Todo opens model on touch https://gorhom.github.io/react-native-bottom-sheet/modal/ */}
                <Image
                  source={require("../assets/icons/stars.png")}
                  style={stylesGPTIcons.icon}
                />
              </TouchableOpacity>
            </SafeAreaView>
          )}
        </SafeAreaView>
        {/* Bottom Component */}
        {
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={['25%', '80%']}
            onDismiss={() => setSelectedVerses([])}
          >
            <SafeAreaView style={stylesBottomScreenModal.bottomViewContainer}>
              <Text>Action for verses {selectedVerses.join(', ')}</Text>
              {currentAction ? actionComponents[currentAction] : (
                <>
                  <Button title="Summarize" onPress={() => setCurrentAction('Summarize')} />
                  <Button title="Context" onPress={() => setCurrentAction('Context')} />
                  <Button title="Practical" onPress={() => setCurrentAction('Practical')} />
                  <Button title="Note" onPress={() => setCurrentAction('Note')} />
                  <Button title="Highlight" onPress={() => setCurrentAction('Highlight')} />
                  <Button title="Bookmark" onPress={() => setCurrentAction('Bookmark')} />
                </>
              )}
              {!currentAction && (
                <TouchableOpacity
                  style={stylesBottomScreenModal.closeButton}
                  onPress={() => setSelectedVerses([])}
                >
                  <Text style={stylesBottomScreenModal.textStyle}>Close</Text>
                </TouchableOpacity>
              )}
            </SafeAreaView>
          </BottomSheetModal>
        }
      </BottomSheetModalProvider>
    </>
  );
};

const trendingPostsStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
});

const stylesScreen = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 15,
    flex: 1, // ensure it takes up full height
  },
});

const stylesHeader = StyleSheet.create({
  searchBar: {
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    borderColor: "grey",
    backgroundColor: '#f0f0f0',
  },

  bibleHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bibleHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

const stylesBibleSelectionModal = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'space-around', // Distribute space evenly
    alignItems: 'stretch', // Stretch items to fill the space
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

const stylesBibleTextAndRecentPosts = StyleSheet.create({
  container: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bibleTextContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    width: "80%",
  },

  bibleText: {
    fontSize: 20,
    lineHeight: 30,
  },

  recentPostsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 70,
  },
});

const stylesGPTIcons = StyleSheet.create({
  iconContainer: {
    flex: 1, // ensure it takes up full height
    justifyContent: 'flex-end', // align children to the bottom
  },
  icon: {
    position: "absolute",
    right: 10,
    bottom: 10,
    height: 50,
    width: 50
  },
});

const stylesBottomScreenModal = StyleSheet.create({
  bottomViewContainer: {
    display: "flex",
    width: '100%',
    backgroundColor: '#FFFFFF', // Change this to match your app's design
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',

    borderRadius: 15,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const stylesActionComponents = StyleSheet.create({
  container: {
    padding: 30, // Increase padding
    flex: 1,
    backgroundColor: '#f8f8f8', // Add a light background color
  },
  title: {
    fontSize: 24, // Increase font size
    fontWeight: 'bold',
    marginBottom: 30, // Increase margin
    color: '#333', // Darker color for the text
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20, // Increase margin
    paddingLeft: 10,
    height: 40, // Increase height
    borderRadius: 5, // Add some border radius
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40, // Increase margin
  },
});

export default ReadingScreen;
