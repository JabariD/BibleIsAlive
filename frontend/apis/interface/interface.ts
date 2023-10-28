/**
 * This file contains the interfaces for the frontend of the application.
 * These interfaces are used to define the shape of the data objects used throughout the application.
 * Each interface represents a different entity in the application.
 */


/**
 * Interface for TimeRange
 * Used to represent a range of time with a start and end date.
 * This is typically used for scheduling and event planning.
 */
interface TimeRange {
    // Start date of the time range
    start: Date;
    // End date of the time range
    end: Date;
};

/**
 * Interface for Service
 * Represents a service event in the church with a description, specific time range, repeat frequency.
 */
interface Service {
    // What type of service is this.
    description: String;
    // The hours of the service
    hours: TimeRange;
    // Repeat frequency of the service
    repeat: 'weekly' | 'biweekly' | 'monthly';
};


/**
 * Interface for Badges
 * Represents a badge that a user can earn. Contains a description and an image URL.
 */
interface Badges {
    // Description of the badge
    description: string;
    // URL of the badge image
    imageUrl: string;
};

/**
 * Interface for Notes
 * Represents a note created by a user. Contains the note text, creation timestamp, attached verses, and an optional tag.
 */
interface Notes {
    // Text of the note
    text: string;
    // Timestamp when the note was created
    createdTimestamp: Date;
    // Verses attached to the note
    versesAttached: Array<string>;
    // Tag of the note
    tag?: string;
};

/**
 * Interface for Bookmarks
 * Represents a bookmark created by a user. Contains the creation timestamp, attached verses, and an optional tag.
 */
interface Bookmarks {
    // Timestamp when the bookmark was created
    createdTimestamp: Date;
    // Verses attached to the bookmark
    versesAttached: Array<string>;
    // Tag of the bookmark
    tag?: string;
};

/**
 * Interface for Highlights
 * Represents a highlight created by a user. Contains the creation timestamp, attached verses, and an optional tag.
 */
interface Highlights {
    // Timestamp when the highlight was created
    createdTimestamp: Date;
    // Verses attached to the highlight
    versesAttached: Array<string>;
    // Tag of the highlight
    tag?: string;
};

/**
 * Interface for User
 * Represents a user in the application. Contains various properties related to the user's profile and activities.
 * Note: The friends, bookmarks, highlights, notes, and badges properties are arrays that can contain other users or user-created content.
 */
interface User {
    // URL of the user's profile image
    profileImageUrl?: string;
    // User's motto
    motto: string;
    // User's favorite verse
    favoriteVerse: string;
    // User's level
    level: number;
    // User's level experience points
    levelXP: number;
    // Array of user's friends
    friends: Array<User>;
    // Array of user's bookmarks
    bookmarks: Array<Bookmarks>
    // Array of user's highlights
    highlights: Array<Highlights>
    // Array of user's notes
    notes: Array<Notes>
    // Array of user's badges
    badges: Array<Badges>
};

/**
 * Interface for Church
 * Represents a church in the application. Contains properties related to the church's profile and activities.
 * Note: The preachers, deacons, and services properties are arrays that can contain users or service events.
 */
interface Church {
    // Name of the church
    name: string;
    // Location of the church
    location: string;
    // Array of preachers in the church
    preachers: Array<User>;
    // Array of deacons in the church
    deacons: Array<User>;
    // Array of elders in the church
    elders: Array<User>;
    // Array of services in the church
    services: Array<Service>;
    // URL of the church's profile image
    profileImageUrl?: string;
};

/**
 * Interface for Comment
 * Represents a comment made by a user or a church. Contains the author, comment text, and creation timestamp.
 */
interface Comment {
    // Author of the comment, can be a User or a Church
    author: User | Church;
    // Text of the comment
    text: String;
    // Timestamp when the comment was created
    createdTime: Date;
};

/**
 * Interface for Post
 * Represents a post made by a user or a church. Contains the author, attached verses, creation timestamp, comments, post text, and optional post images.
 */
interface Post {
    // Author of the post, can be a User or a Church
    author: User | Church;
    // Verses attached to the post
    versesAttached: Array<string>;
    // Timestamp when the post was created
    createdTime: Date
    // Array of comments on the post
    comments?: Array<Comment>
    // Text of the post
    postText: String;
    // Array of URLs of images in the post
    postImagesUrls?: Array<String>;
};
