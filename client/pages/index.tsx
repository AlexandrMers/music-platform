import { Button } from "@material-ui/core";
import WithNavbarContainer from "../containers/WithNavbarContainer";

const Index = () => {
  return (
    <WithNavbarContainer>
      <div className="center">
        <h1>Это главная страница</h1>
        <Button>Какая-то кнопка</Button>
      </div>
    </WithNavbarContainer>
  );
};

export default Index;
