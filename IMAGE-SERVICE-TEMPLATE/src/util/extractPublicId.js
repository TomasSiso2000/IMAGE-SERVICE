const extractPublicId = (url) =>{
  const regex = /\/upload\/(?:v\d+\/)?(.+)\.(jpg|jpeg|png|webp|gif|bmp|svg|ico)$/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

module.exports = extractPublicId;