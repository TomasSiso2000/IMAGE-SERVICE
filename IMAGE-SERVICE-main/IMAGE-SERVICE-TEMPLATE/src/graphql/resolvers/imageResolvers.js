const cloudinary = require("../../config/cloudinary");
const extractPublicId = require("../../util/extractPublicId") 
const resolvers = {
  Upload: require('graphql-upload').GraphQLUpload,

  Mutation: {
    uploadImage: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();

      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'uploads' },
          (error, result) => {
            if (error) return reject(error);

            resolve({
              url: result.secure_url
            });
          }
        );
        stream.pipe(uploadStream);
      });
    },

    deleteImage: async (_, {url }) => {
       const publicId = extractPublicId(url);
        if (!publicId) {
          return false;
        }
      try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result.result === 'ok';
      } catch (error) {
        console.error('Error eliminando imagen:', error);
        return false;
      }
    }
  }
};

module.exports = resolvers;
