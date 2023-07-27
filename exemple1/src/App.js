import "./App.css";
  import Header from "./Header";
  import MealsList from "./MealsList";
  import RandomMeal from "./RandomMeal";
  import SearchMeals from "./SearchMeals";
  import ListCategories from "./ListCategories";
  import Footer from "./Footer";

  function App() {
      return (
        <>

          <Header />
          <MealsList />
          <RandomMeal />
          <SearchMeals />
          <ListCategories />
          <Footer />

        </>
      );
  }

export default App;