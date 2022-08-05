const Message = ({ malade }) => {
  if (malade) return <>Allez vous coucher !</>;
  else return <>Super, vous n'&ecirc;tes pas malade 😛</>;
};

export default Message;
