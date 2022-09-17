import styled from "styled-components";
import { useUIContext } from "../../context/ui-context";
import { BsFillGridFill } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";

const ViewButtons = () => {
  const { changeGridView, changeListView, isGridView, isListView } =
    useUIContext();
  return (
    <Wrapper>
      <button
        className={`${isGridView && "view-active"}`}
        onClick={changeGridView}
      >
        <BsFillGridFill className="icon" />
      </button>
      <button
        className={`${isListView && "view-active"}`}
        onClick={changeListView}
      >
        <HiViewList className="icon" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;

  button {
    width: 1.6rem;
    height: 1.6rem;
    padding: 0.25rem;
    border: 0.0625rem solid var(--clr-black);
    border-radius: var(--radius);
    background-color: var(--clr-white);
    display: inline-grid;
    place-content: center;
  }

  .icon {
    width: 1.1rem;
    height: 1.1rem;
    color: var(--clr-black);
  }

  .view-active {
    background-color: var(--clr-black);
    .icon {
      color: var(--clr-white);
    }
  }
`;

export default ViewButtons;
