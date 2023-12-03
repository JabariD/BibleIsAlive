import { create } from 'twrnc';

// Create the customized version.
const tw = create(require(`./tailwind.config`));

// This becomes the main function your app uses.
export default tw;