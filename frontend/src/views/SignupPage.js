import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function SignupPage() {
  const [NewNickname, setNewNickname] = useState('');
  const [NewID, setNewID] = useState('');
  const [NewPW, setNewPW] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = () => {
    // 여기에서 로그인 처리 로직을 구현
    // NewID, NewPW 상태를 백엔드에서 사용
    console.log('NewNickname:', NewNickname);
    console.log('NewID:', NewID);
    console.log('NewPW:', NewPW);

    setTimeout(() => {
      navigate('/LoginPage');
    }, 2000)
    
  };

  return (
    <div style={{ width: '100%', margin: '0' }}>
      <div style={{ width: '100%', margin: '1rem auto'}}>
        <label>
          닉네임 :  
          <input
            name="NewNickname"
            value={NewNickname || "사용하고자 하는 닉네임을 입력해주세요."}
            onChange={(e) => setNewNickname(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1rem', marginBottom: '1rem', width: '20rem'}}
          /><br />
        </label>

        <label>
          ID : 
          <input
            name="NewID"
            value={NewID || "사용하고자 하는 아이디를 입력해주세요."}
            onChange={(e) => setNewID(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1rem', marginBottom: '1rem', width: '20rem'}}
          /><button 
              style={{ marginLeft: '1rem', padding: '0.5rem'}}>중복확인</button><br/>
        </label>

        <label>
          PW : 
          <input
            name="NewPW"
            value={NewPW || "4자리 비밀번호를 입력해주세요."}
            onChange={(e) => setNewPW(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1rem', marginBottom: '1rem', width: '20rem'}}
          />
        </label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button1 onClick={handleSignup}>회원가입하기</Button1>
      </div>
    </div>
  );
}

export default SignupPage;