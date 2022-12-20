import './categories.scss'

import categories from './categories-directory/CategoryDirectory';
import CategoryItem from './components/category-item/CategoryItem';

const App = () => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default App;
