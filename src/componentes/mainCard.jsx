import React from "react";
import Cards from "./cards";

const cardContent = [
  //objeto 1
  {
    img:
      "https://images.unsplash.com/photo-1534628526458-a8de087b1123?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Shih tzu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia delectus deleniti sequi pariatur, quos itaque ullam praesentium ad corporis excepturi.",
    buttonLabel: "Find Out More",
  },
  //objeto 2
  {
    img:
      "https://images.unsplash.com/photo-1512546321483-c0468b7b8a95?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    title: "Beagle",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    buttonLabel: "Find Out More",
  },
  //objeto 3
  {
    img:
      "https://images.unsplash.com/photo-1566903451935-7e8835ed3e97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Huskey",
    description:
      "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    buttonLabel: "Find Out More",
  },
  //objeto 4
  {
    img:
      "https://images.unsplash.com/photo-1529927066849-79b791a69825?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
    title: "Pug",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint",
    buttonLabel: "Find Out More",
    }
];

function MainCard() {
  let cards = cardContent.map((el) => {
    return (
      <Cards
        img={el.img}
        title={el.title}
        description={el.description}
        buttonLabel={el.buttonLabel}
      />
    );
  });
  return cards;
}

export default MainCard;
