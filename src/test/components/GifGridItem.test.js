import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGridItem } from "../../components/GifGridItem";
describe("Pruebas en <GifGridItem />", () => {
  test("shouuld diplay the component right", () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
