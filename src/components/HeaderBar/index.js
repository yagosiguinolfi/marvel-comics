import React from 'react';
import { Button, Text } from '../../utils/styles';
import { CgProfile } from '@react-icons/all-files/cg/CgProfile';
import { colors } from '../../utils/colors';
import { ViewAbsolute } from './styles';
import { useNavigate } from 'react-router';


function HeaderBar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.setItem('token', '');
    navigate('/login');
  }

  return (
    <ViewAbsolute>
      <Button size={80} onClick={()=>navigate('/profile')}>
        <CgProfile size={65} color={colors.white}/>
      </Button>
      <Button onClick={logout}><Text light bold size={20}>Logout</Text></Button>
    </ViewAbsolute>
  );
}
export default HeaderBar;