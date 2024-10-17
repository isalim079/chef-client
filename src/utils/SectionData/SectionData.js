"use client"

import community1 from '@/assets/animation/community1.json'
import community2 from '@/assets/animation/community2.json'
import community3 from '@/assets/animation/community3.json'
import community4 from '@/assets/animation/community4.json'


export const featuredRecipeData = [
  {
    id: 1,
    name: "Zesty Lemon Garlic Chicken",
    description:
      "Tender chicken breasts marinated in a vibrant lemon and garlic sauce, perfect for a light yet flavorful dinner.",
    image: "https://i.ibb.co.com/Ns7htZs/featured-Recipe1.png",
  },
  {
    id: 2,
    name: "Classic Spaghetti Carbonara",
    description:
      "An Italian favorite, this creamy pasta dish combines crispy pancetta, egg yolks, and Parmesan for a rich and comforting meal.",
    image: "https://i.ibb.co.com/zFmn8Q4/featured-Recipe2.png",
  },
  {
    id: 3,
    name: "Vegan Quinoa and Avocado Salad",
    description:
      "A refreshing and nutritious salad featuring quinoa, fresh avocado, and a tangy lime dressing, perfect for a healthy lunch.",
    image: "https://i.ibb.co.com/85NRvjM/featured-Recipe3.png",
  },
  {
    id: 4,
    name: "Chocolate Lava Cake Delight",
    description:
      "Indulge in this decadent dessert, featuring a warm chocolate cake with a gooey, molten center that melts in your mouth.",
    image: "https://i.ibb.co.com/qgNTP5B/featured-Recipe4.png",
  },
];

export const topContributorsData = [
  {
    id: 1,
    username: "ChefJohn",
    profileImage:
      "https://i.ibb.co.com/jDyfs45/free-photo-of-smiling-elderly-woman-on-bustling-street.jpg",
    recipesPosted: 45,
    upvotes: 320,
    featuredRecipe: {
      name: "Spicy Chicken Tacos",
      image:
        "https://i.ibb.co.com/jDyfs45/free-photo-of-smiling-elderly-woman-on-bustling-street.jpg",
    },
  },
  {
    id: 2,
    username: "VeganQueen",
    profileImage:
      "https://i.ibb.co.com/3MGN4cS/free-photo-of-elderly-man-sitting-on-a-park-bench-outdoors.jpg",
    recipesPosted: 32,
    upvotes: 275,
    featuredRecipe: {
      name: "Vegan Buddha Bowl",
      image:
        "https://i.ibb.co.com/3MGN4cS/free-photo-of-elderly-man-sitting-on-a-park-bench-outdoors.jpg",
    },
  },
  {
    id: 3,
    username: "BakeMasterTom",
    profileImage: "https://i.ibb.co.com/RbfJFH3/pexels-photo-2531552.jpg",
    recipesPosted: 28,
    upvotes: 215,
    featuredRecipe: {
      name: "Chocolate Chip",
      image: "https://i.ibb.co.com/RbfJFH3/pexels-photo-2531552.jpg",
    },
  },
  {
    id: 4,
    username: "SpiceLoverAnna",
    profileImage: "https://i.ibb.co.com/RbfJFH3/pexels-photo-2531552.jpg",
    recipesPosted: 39,
    upvotes: 350,
    featuredRecipe: {
      name: "Curry Lentil Soup",
      image: "https://i.ibb.co.com/RbfJFH3/pexels-photo-2531552.jpg",
    },
  },
  {
    id: 5,
    username: "HealthyChefMike",
    profileImage: "https://i.ibb.co.com/4N7GsPp/pexels-photo-1520760.jpg",
    recipesPosted: 50,
    upvotes: 400,
    featuredRecipe: {
      name: "Grilled Salmon with Quinoa",
      image: "https://i.ibb.co.com/4N7GsPp/pexels-photo-1520760.jpg",
    },
  },
];

export const communityData = [
  {
    id: 1,
    title: "Trending Recipe: Spicy Chicken Tacos",
    description:
      "Our Spicy Chicken Tacos recipe has been trending! With 100+ upvotes and counting, it’s become a community favorite.",
    image: community1,
    link: "/recipes/spicy-chicken-tacos",
  },
  {
    id: 2,
    title: "Best Vegan Burger Challenge",
    description:
      "Join our 'Best Vegan Burger' challenge! Submit your recipe and stand a chance to be featured on the homepage!",
    image: community2,
    link: "/challenges/vegan-burger",
  },
  {
    id: 3,
    title: "Meet ChefJohn - Our Star Contributor",
    description:
      "Meet ChefJohn, one of our top contributors! With 45 recipes and over 300 upvotes, he shares his passion for quick and delicious meals.",
    image: community3,
    link: "/contributors/chef-john",
  },
  {
    id: 4,
    title: "New Feature: Follow Your Favorite Chefs",
    description:
      "We’ve launched a new feature! Now you can follow your favorite chefs and stay updated with their latest recipes.",
    image: community4,
    link: "/features/follow",
  },
  {
    id: 5,
    title: "Recipe of the Month: Vegan Buddha Bowl",
    description:
      "Recipe of the Month: Vegan Buddha Bowl by VeganQueen! Check out this fresh and healthy recipe that everyone is raving about.",
    image: community1,
    link: "/recipes/vegan-buddha-bowl",
  },
  {
    id: 6,
    title: "Live Cooking Session: Grilled Salmon",
    description:
      "Don’t miss our live cooking session this weekend! ChefMike will be showing us how to master grilled salmon dishes.",
    image: community2,
    link: "/events/live-cooking-salmon",
  },
  {
    id: 7,
    title: "100th Recipe Milestone by BakeMasterTom",
    description:
      "Congratulations to BakeMasterTom for posting his 100th recipe! Check out his latest dessert creations.",
    image: community3,
    link: "/contributors/bake-master-tom",
  },
  {
    id: 8,
    title: "Cooking Tip: Healthier Frying Alternatives",
    description:
      "Tip of the Week: Use avocado oil instead of butter for a healthier frying alternative!",
    image: community4,
    link: "/tips/avocado-oil-frying",
  },
  {
    id: 9,
    title: "Fall Comfort Foods: New Recipe Collection",
    description:
      "Explore our new collection: Fall Comfort Foods! Warm soups, hearty casseroles, and all your autumn favorites.",
    image: community2,
    link: "/collections/fall-comfort-foods",
  },
  {
    id: 10,
    title: "Special Collaboration: Italian Risotto by ChefAnna",
    description:
      "We’re excited to announce a guest recipe from ChefAnna, who brings us her famous Italian risotto!",
    image: community1,
    link: "/recipes/italian-risotto",
  },
];
