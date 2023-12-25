import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const icons = {
  menu: <MenuIcon className="text-white" />,
  person: <PersonIcon />,
  view: <VisibilityIcon />,
};

export const navlinks = [
  { name: icons.person, url: "/profile" },
  { name: "about", url: "/#about" },
  { name: "destinations", url: "/destinations" },
  { name: "book", url: "/book-trip" },
  { name: "travel blog", url: "/blog" },
];

export const destinations = [
  {
    id: 1,
    location: "Paris, France",
    description:
      "Known as the 'City of Light', Paris is celebrated for its beautiful city plan, architecture, museums, bridges, cathedrals, parks, shopping, and gastronomy. The Eiffel Tower, Notre Dame Cathedral, and the Louvre are among its most famous attractions.",
    images: require("@/public/paris.jpg"),
  },
  {
    id: 2,
    location: "Bali, Indonesia",
    description:
      "Bali is a tropical paradise with a unique blend of modern tourist facilities combined with wonderful shopping and a rich past and heritage. It's known for its lush volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    images: require("@/public/bali.jpg"),
  },
  {
    id: 3,
    location: "Kyoto, Japan",
    description:
      "Kyoto is famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses. It’s also known for its formal traditions such as kaiseki dining and geisha female entertainers.",
    images: require("@/public/kyoto.jpg"),
  },
  {
    id: 4,
    location: "Barcelona, Spain",
    description:
      "Barcelona, located on the Mediterranean coast, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.",
    images: require("@/public/barcelona.jpg"),
  },
];

export const allDestinations = [
  {
    id: 1,
    location: "Paris, France",
    description:
      "Known as the 'City of Light', Paris is celebrated for its beautiful city plan, architecture, museums, bridges, cathedrals, parks, shopping, and gastronomy. The Eiffel Tower, Notre Dame Cathedral, and the Louvre are among its most famous attractions.",
    images: require("@/public/paris.jpg"),
  },
  {
    id: 2,
    location: "Bali, Indonesia",
    description:
      "Bali is a tropical paradise with a unique blend of modern tourist facilities combined with wonderful shopping and a rich past and heritage. It's known for its lush volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    images: require("@/public/bali.jpg"),
  },
  {
    id: 3,
    location: "Kyoto, Japan",
    description:
      "Kyoto is famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses. It’s also known for its formal traditions such as kaiseki dining and geisha female entertainers.",
    images: require("@/public/kyoto.jpg"),
  },
  {
    id: 4,
    location: "Barcelona, Spain",
    description:
      "Barcelona, located on the Mediterranean coast, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.",
    images: require("@/public/barcelona.jpg"),
  },
  {
    id: 5,
    location: "Cape Town, South Africa",
    description:
      "Cape Town is famed for its beautiful natural settings in the Cape Floristic Region and for landmarks such as Table Mountain and Cape Point. The city is praised for its harbor, its natural setting in the Cape floral kingdom, and for landmarks such as Table Mountain and Cape Point.",
    images: require("@/public/capetown.jpg"),
  },
  {
    id: 6,
    location: "Maui, Hawaii, USA",
    description:
      "Maui, known also as 'The Valley Isle', is the second largest Hawaiian island. The island is beloved for its world-famous beaches, the sacred Iao Valley, views of migrating humpback whales, and the magnificent sunrise and sunset from Haleakalā.",
    images: require("@/public/maui.jpg"),
  },
  {
    id: 7,
    location: "Sydney, Australia",
    description:
      "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Its vibrant arts scene and numerous beaches offer both culture and relaxation.",
    images: require("@/public/sydney.jpg"),
  },
  {
    id: 8,
    location: "Rome, Italy",
    description:
      "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture, and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire.",
    images: require("@/public/rome.jpg"),
  },
  {
    id: 9,
    location: "New York City, USA",
    description:
      "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial, and cultural centers.",
    images: require("@/public/new-york.jpg"),
  },
  {
    id: 10,
    location: "Santorini, Greece",
    description:
      "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape and cliffs. The island is known for its dramatic views, stunning sunsets, and white-washed buildings.",
    images: require("@/public/paris.jpg"),
  },
  {
    id: 11,
    location: "Banff National Park, Canada",
    description:
      "Banff National Park is Canada's oldest national park, established in 1885 in the Rocky Mountains. The park, located in Alberta, is known for its stunning scenery, with turquoise glacial lakes, snow-capped peaks, and dense pine forests.",
    images: require("@/public/banff.jpg"),
  },
  {
    id: 12,
    location: "Rio de Janeiro, Brazil",
    description:
      "Rio de Janeiro is famous for its breathtaking landscapes, its laidback beach culture, and its annual carnival. The 'Cidade Maravilhosa' (Marvelous City) is known for the iconic Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain.",
    images: require("@/public/rio.jpg"),
  },
];
