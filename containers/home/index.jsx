import Banner from "../../components/banner";

export default function HomeContainer() {
  const setObj = {
    title: "Hello World",
    description: "This is a description",
    image: {
      url: "https://picsum.photos",
      width: '700',
      height: '500',
      alt: "This is an image",
      attribute: "grayscale"
    },
    link: {
      url: "/about",
      text: "About"
    }
  };
    return (
        <>
          <Banner setObj={setObj}/>
        </>
    )
}