import React, { useRef } from 'react';

export default function CatFriends() {
  const itemsRef = useRef(new Map());

  function scrollToId(id) {
    const node = itemsRef.current.get(id);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <nav>
        <button className="btn btn-primary m-20" onClick={() => scrollToId(0)}>
          Chat 1
        </button>
        <button className="btn btn-primary mr-15" onClick={() => scrollToId(5)}>
          Chat 6
        </button>
        <button className="btn btn-primary mr-15" onClick={() => scrollToId(9)}>
          Chat 10
        </button>
      </nav>
      <div>
        <ul className="d-flex" style={{ overflowX: 'scroll' }}>
          {catList.map((cat) => (
            <li
              style={{ minWidth: '300px' }}
              key={cat.id}
              ref={(node) => {
                itemsRef.current.set(cat.id, node);
              }}
            >
              <img src={cat.imageUrl} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  });
}
