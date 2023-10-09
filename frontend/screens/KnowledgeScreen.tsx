import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

interface KnowledgeComponentProps {
  headerText: string;
  subtitleText: string;
}
const KnowledgeComponent: React.FC<KnowledgeComponentProps> = ({
  headerText,
  subtitleText,
}) => {
  return (
    <SafeAreaView style={stylesKnowledgeComponent.container}>
      <SafeAreaView style={stylesKnowledgeComponent.imageAndTextContainer}>
        {/* Image */}
        <Image
          source={require("../assets/images/church.jpg")}
          style={{ width: 80, height: 80, borderRadius: 10, marginRight: 25 }}
        />
        {/* Text */}
        <SafeAreaView>
          <Text style={stylesKnowledgeComponent.headerText}>{headerText}</Text>
          <Text style={stylesKnowledgeComponent.subtitleText}>
            {subtitleText}
          </Text>
        </SafeAreaView>
      </SafeAreaView>
      {/* Icon */}
      <SafeAreaView>
        <Image
          source={require("../assets/icons/bookmark.png")}
          style={{ width: 30, height: 30 }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

/**
 * Knowledge Screen
 *
 *
 */
export type Props = {};
const KnowledgeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={stylesKnowledgeScreen.container}>
      {/* Header */}
      <SafeAreaView style={stylesHeader.header}>
        <SafeAreaView style={stylesHeader.knowledgeDropdown}>
          <Text style={stylesHeader.knowledgeDropdownText}>Bookmarks</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text>▼</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView>
          <Image
            source={require("../assets/icons/filters.png")}
            style={stylesHeader.sortImage}
          />
        </SafeAreaView>
      </SafeAreaView>

      {/* SearchBar */}
      <TouchableOpacity>
        <SafeAreaView style={stylesSearchBar.container}>
          <TextInput
            placeholder="Search"
            style={stylesSearchBar.searchInput}
            onChangeText={() => {}}
          />
        </SafeAreaView>
      </TouchableOpacity>

      {/* List */}
      <SafeAreaView style={stylesList.container}>
        <ScrollView>
          <KnowledgeComponent headerText={"abc"} subtitleText={"123"} />
          <KnowledgeComponent headerText={"abc"} subtitleText={"123"} />
          <KnowledgeComponent headerText={"abc"} subtitleText={"123"} />
          <KnowledgeComponent headerText={"abc"} subtitleText={"123"} />
          <KnowledgeComponent headerText={"abc"} subtitleText={"123"} />
          <KnowledgeComponent headerText={"abc"} subtitleText={"123"} />
          <KnowledgeComponent headerText={"abc"} subtitleText={"123"} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const stylesKnowledgeScreen = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 20,
  },
});

const stylesHeader = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  knowledgeDropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  knowledgeDropdownText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 8,
  },

  sortImage: {
    height: 25,
    width: 25,
  },
});

const stylesSearchBar = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  searchInput: {
    flex: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
});

const stylesKnowledgeComponent = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  imageAndTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitleText: {
    color: "grey",
    fontSize: 16,
  },
});

const stylesList = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 50,
  },
});

export default KnowledgeScreen;
