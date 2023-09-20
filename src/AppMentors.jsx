import React, { useReducer, useState, useMemo, useCallback, memo } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);

  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback( () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({type: 'updated', prev, current});
  
    // setPerson((person) => ({
    //   ...person,
    //   mentors: person.mentors.map((mentor) => {
    //     if(mentor.name === prev)
    //     { 
    //       return {...mentor, name: current }
    //     }
    //     return mentor
    //   }),
    // })) 
    
  }, []
  )
  const handleAdd = useCallback(() => {
    const name = prompt(`누구를 추가 하고 싶은가요?`);
    const title = prompt(`직업은 뭔가요?`);    
    dispatch({type: 'added', name, title});
    // setPerson((person) => ({
    //   ...person,
    //   mentors: [...person.mentors, newItem]
    // })) 
    
  }, [])

  const handleDelete = useCallback( () => {
    const name = prompt(`누구의 이름을 삭제하고 싶은가요?`);
    dispatch({type: 'deleted', name});
    // setPerson((person) => ({
    //   ...person,      
    //   mentors: person.mentors.filter((m) => m.name !== name),
    // })) c# 운영
    
  }, [])
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button onClick={handleUpdate}  text ='멘토의 이름을 바꾸기'    >
        
      </Button>
      <Button onClick={handleAdd}  text = '멘토 추가하기'></Button>
      <Button onClick={handleDelete} text = '멘토 삭제하기' ></Button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  }

  const Button = memo(({text, onClick}) =>{
    console.log('Button' , text, 're-rendering' );
    const result = useMemo (() => calculator(), [])
    return (
      <button 
        onClick={onClick}
        style={{
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '20px',
          margin: '0.4rem'

        }}
        >
          {`${text} ${result}`}
        </button>
    )
  });

  function calculator() {
    for (let i = 0; i < 1; i ++)
    {
      console.log('🚼');
    }
    return 10;
  }