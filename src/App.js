import React from 'react';
import './App.css';
import FirstPractice from './components/propsPractice'
function App() {
  return(
    <div>
      <div>
        <FirstPractice contact ={{
          name: 'Rice',
          imgurl:require("./picturesfolder/rice.jpg"),
          category:'(starch)',
          description:'Rice is the seed of the grass species Oryza glaberrima (African rice) or Oryza sativa (Asian rice). As a cereal grain, it is the most widely consumed staple food for a large part of the world.Since sizable portions of sugarcane and maize crops are used for purposes other than human consumption, rice is the most important grain with regard to human nutrition and caloric intake, providing more than one-fifth of the calories consumed worldwide by humans.'
        }}/>

        <FirstPractice contact ={{
          name: 'Noodles',
          imgurl:require("./picturesfolder/noodles.jpg"),
          category:'(starch)',
          description:'Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. Noodles can be refrigerated for short-term storage or dried and stored for future use.Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.'
        }}/>

        <FirstPractice contact ={{
          name: 'Salad',
          imgurl:require("./picturesfolder/salad.jpg"),
          category:'(vegetable)',
          description:'A salad is a dish consisting of a mixture of small pieces of food, usually vegetables or fruit. However, different varieties of salad may contain virtually any type of ready-to-eat food. Salads are typically served at room temperature or chilled, with notable exceptions such as south German potato salad which can be served warm.'
        }}/>

        <FirstPractice contact ={{
          name: 'Shrimp Soup',
          imgurl:require("./picturesfolder/shrimp soup.jpg"),
          category:'(sea-food)',
          description:'Shrimp soup is a soup dish prepared using freshwater or saltwater prawns as a primary ingredient.Prawn and shrimp soup can be prepared as a broth or stock-based soup, as a chowder or as a cream-based soup.'
        }}/>

        <FirstPractice contact ={{
          name: 'Oats',
          imgurl:require("./picturesfolder/cereal.jpg"),
          category:'(cereal)',
          description:'Oat is a species of cereal grain grown for its seed. While oats are suitable for human consumption as oatmeal and oat milk, one of the most common uses is as livestock feed. Oats are associated with lower blood cholesterol when consumed regularly.'
        }}/>
      </div>
    </div>
  );
}
export default App;
