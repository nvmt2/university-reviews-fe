import React, { useState, useEffect } from 'react';

function SearchForm() {
  //STATE
  const [query, setQuery] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');
  const [autoComplete, setAutocomplete] = useState([]);

  const arrayFake = [
    {
      name: 'toi',
      age: 20,
    },
    {
      name: 'toi nguyen',
      age: 25,
    },
    {
      name: 'tu',
      age: 10,
    },
    {
      name: 'tuy',
      age: 10,
    },
    {
      name: 'tai',
      age: 10,
    },
    {
      name: 'thien',
      age: 10,
    },
  ];

  //METHOD
  const handleOnMouseDown = (name) => {
    setQuery(name);
  };

  const handleOnBlur = () => {
    setTimeout(() => setAutocomplete([]), 300);
  };

  //LIFECYCLE
  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(query), 300);
    return () => clearTimeout(timeOutId);
  }, [query]);
  useEffect(() => {
    if (displayMessage.length !== 0) {
      setAutocomplete(
        arrayFake.filter((item) => item.name.includes(displayMessage))
      );
    }
  }, [displayMessage]);
  console.log('displayMessage: ');
  return (
    <>
      <form autoComplete="off">
        <div className="autocomplete">
          <input
            type="text"
            name="university"
            placeholder="Type university"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onBlur={handleOnBlur}
          />
          <div className="autocomplete-items">
            {autoComplete.map(
              (item, index) =>
                index < 3 && (
                  <div
                    key={index}
                    onMouseDown={() => handleOnMouseDown(item.name)}
                  >
                    {item.name} - {item.age}
                  </div>
                )
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
