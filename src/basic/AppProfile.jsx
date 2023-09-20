import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile({name}) {
  const handleClick = (event) => {
    console.log(event);
        alert('버튼이 클릭됨!')
  }
  return (
    <div>
      <button 
        onClick={ handleClick}>
        버튼
      </button> 
    <Avatar 
     image = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
     name = "robin yoon"
     isNew = {true}
      />
     <Profile 
     image = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
     name = "robin yoon"
     job = "CEO"
     isNew =  {true}
      />
     <Profile 
     image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
     name = "ragh seo"
     job = "CFO"
     isNew =  {true}
     />
     
     <Profile
     image = "https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
     name = "rabiori sun"
     job = "dev" />
    </div>
  );
}

export default AppProfile;
