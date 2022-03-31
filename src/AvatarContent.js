import React, { useEffect, useState } from "react";

const AvatarContent = () => {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      // delete previous file URL from browser memory
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    console.log(file);

    // Cho phep chon 1 file giong nhau nhieu lan
    // e.target.value = null
  };

  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />

      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
};

export default AvatarContent;
