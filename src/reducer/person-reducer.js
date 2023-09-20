export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map(mentor => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      const newItem = {
        name,
        title,
      };
      return {
        ...person,
        mentors: [...person.mentors, newItem],
      };
    }

    case "deleted": {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter(m => m.name !== name),
      };
    }

    default: {
      throw Error("알수없는 액션 타입이다: ${action.type}");
    }
  }
}
