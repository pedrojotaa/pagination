const paginate = (followers) => {
  const itemPerPage = 10;
  const pages = Math.ceil(followers.length / itemPerPage);

  //array of array
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    //index of each array
    const start = index * itemPerPage;
    //start and end of new arrays
    return followers.slice(start, start + itemPerPage);
  });
  return newFollowers;
};

export default paginate;
