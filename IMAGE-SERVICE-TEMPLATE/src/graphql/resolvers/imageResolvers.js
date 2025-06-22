const cloudinary = require("../../config/cloudinary");
const extractPublicId = require("../../util/extractPublicId");

const resolvers = {
  Mutation: {
    uploadImage: async (_, { base64Image }) => {
      try {
        // Subir imagen base64 a Cloudinary
        const result = await cloudinary.uploader.upload(base64Image, {
          folder: 'uploads',
        });
        return { url: result.secure_url };
      } catch (error) {
        throw new Error('Error uploading image: ' + error.message);
      }
    },

    deleteImage: async (_, { url }) => {
      const publicId = extractPublicId(url);
      if (!publicId) return false;

      try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result.result === 'ok';
      } catch (error) {
        console.error('Error eliminando imagen:', error);
        return false;
      }
    },
  },
};

module.exports = resolvers;
