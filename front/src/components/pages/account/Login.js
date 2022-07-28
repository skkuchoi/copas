import './Login.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AiOutlineUser, AiTwotoneLock } from 'react-icons/ai';
import AccountLayout from '../../shared/AccountLayout';

/**
 * 여러 요소들이 box라는 component가 없으면 왼쪽이든 어느 한쪽으로 정렬이 되어 있을 것이다. 그러면 가운데 정렬을 하기 위해서 box를 사용한다.
 * box라는 것은 css, html에서 <div>와 같은 역할을 한다.
 * marginTop은 위쪽을 8만큼 떨어뜨려라.
 * display, flexDirection, alignItems는 html, css의 고유의 기능. flex column은 flexDirection 값을 column으로 주면, 열의 방향으로
 * contents들이 흘러가게 한다(배치시킨다). alignItems을 center로 주게되면 가운데에 위치하게 된다.
 * 화면 전체를 쓰는 것을 제한하기 위해서는 요소들을 containter라는 component로 감싸주면 된다.
 * maxWidth라는 값을 xs라고 하면, extra small 이라고 하는 size인데, sm, md 등등의 size가 있다.
 */

function Login() {
  return (
    <AccountLayout>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexGrow : 2,
          }}>
          <div className="login">
            <div className="icon">
              <AiOutlineUser size="45" />
            </div>
            <TextField // 아이디 입력 Field.
              margin="normal" // textfield의 margin 값을 normal로 줌.
              label="아이디를 입력하세요."
              required
              fullwidth // required : 이메일을 반드시 입력하게끔 만들기 위함.
              name="email" // fullwidth : UI상으로 textfield를 화면 전체를 사용하게끔 만듦.
              autoComplete="email" // 사용자들이 값을 입력할 때 자동으로 입력하게끔 만들어줌.
              autoFoucs // UI가 시작되었을 때 자동으로 TextField에 사용자의 커서가 생기게 만들어줌.
            />
          </div>
          <div className="password">
            <div className="icon">
              <AiTwotoneLock size="45" />
            </div>

            <TextField // 비밀번호 입력 Field.
              margin="normal"
              label="비밀번호를 입력하세요."
              type="password" // 비밀번호를 보이지 않게끔 만듦.
              required
              fullwidth
              name="password"
              autoComplete="current-password"
            />
          </div>
          <FormControlLabel // checkbox만 있으면 무엇인지 모름으로 인해 naming을 해주기 위해 필요한 도구. checkbox를 control의 props 값으로 줌.
            control={
              <Checkbox
                value="remember" // 비밀번호 저장을 클릭시에도 체크박스에 체크가 가능.
                color="primary"
              />
            } // 비밀번호 기억하게 만들기.
            label="비밀번호 저장"
          />
          <Button
            type="submit"
            fullWidth // submit을 통해 서버쪽으로 데이터가 전송 가능. variant라고 하는 버튼의 모양을 결정하는 도구의 값으로 contained라고 주면, 색깔로 꽉 차여져있는 button이 만들어짐.
            //버튼과 위에 있는 요소들과의 간격을 주기 위해서 margin top(mt)를 주면 됨. sx라고 prop은 component의 디자인을 간단하게 고치고 싶을 때, sx라는 prop에 css 효과를 줌으로써 바꿀 수 있다. mb는 아래쪽과 간격을 떨어놓겠다는 의미.
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2 }}>
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>회원가입</Link>
            </Grid>
            <Grid item xs>
              <Link>계정찾기</Link>
            </Grid>
            <Grid item>
              <Link>회원탈퇴</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AccountLayout>
  );
}

export default Login;

/**
 * 내가 <a> tag를 안 쓰고 <Link>를 쓴 이유는 <a>를 쓰면 mui의 전반적인 디자인 테마를 적용하기 힘듦.
 * grid는 나란히 배치할 때 사용함. grid라는 container라는 prop을 가지고 있는 component가 행을 표시함. 아래에 있는 내용들은 행이 될 것이다라는 것을 의미.
 * 그 행에 들어갈 각각의 열을 결정하는 것은 하위의 gird라는 component를 추가하는 것. 하위의 grid는 item이라는 prop을 가져야 된다.
 * 비밀번호 찾기와 회원가입 중에서 앞에 있는 비밀번호 찾기가 남은 여백을 다 가져가도록 설정을 하면, 두개가 나란히 배치가 되는데, 그 때 사용하는 것이
 * xs라는 것. xs는 auto layout이라고 해서 2개의 grid의 구성요소가 있을 때, xs라고 지정을 하게 되면, 그게 지정된 column이 빈 공간을 다 가져가게 됨.
 */
