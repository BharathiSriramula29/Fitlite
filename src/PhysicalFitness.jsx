import React, { useState } from "react";

export default function FitnessPlan() {
  const [age, setAge] = useState("teen");
  const [gender, setGender] = useState("male");
  const [goal, setGoal] = useState("loss");
  const [workouts, setWorkouts] = useState([]);
  const [nutrition, setNutrition] = useState([]);

  // Full plans object (copied/expanded from your original HTML data)
  const plans = {
    loss: {
      male: {
        workouts: [
          {
            name: "Running / Sprinting",
            uses: "Burns calories, improves stamina and cardiovascular health.",
            img: "sprinting.jpeg",
            video: "https://www.youtube.com/results?search_query=running+exercise",
            alert: "⚠️ Avoid if you have knee or joint issues.",
          },
          {
            name: "HIIT (High-Intensity Interval Training)",
            uses: "Boosts metabolism and burns fat quickly.",
            img: "hiit.jpeg",
            video: "https://www.youtube.com/results?search_query=hiit+workout",
            alert: "⚠️ Not suitable for people with heart conditions.",
          },
          {
            name: "Burpees",
            uses: "Full body workout that burns fat and builds endurance.",
            img: "burpees.jpeg",
            video: "https://www.youtube.com/results?search_query=burpees+exercise",
            alert: "⚠️ Avoid if you have back pain.",
          },
          {
            name: "Push-ups + Jump Squats Combo",
            uses: "Improves strength, burns calories, and tones muscles.",
            img: "jumpsquats.jpeg",
            video: "https://www.youtube.com/results?search_query=pushups+and+squats+combo",
            alert: "⚠️ Avoid if you have shoulder or knee pain.",
          },
          {
            name: "Mountain Climbers",
            uses: "Great for cardio, core strengthening, and fat burning.",
            img: "mountainclimbers.jpeg",
            video: "https://www.youtube.com/results?search_query=mountain+climbers+exercise",
            alert: "⚠️ Avoid if you have wrist or lower back issues.",
          },
          {
            name: "Deadlifts",
            uses: "Boosts metabolism and builds overall strength.",
            img: "deadlifts.jpeg",
            video: "https://www.youtube.com/results?search_query=deadlifts+exercise",
            alert: "⚠️ Not recommended for people with lower back injuries.",
          },
        ],
        nutrition: [
          {
            name: "Oatmeal with Fruits",
            uses: "Low-calorie, high-fiber breakfast that keeps you full longer.",
            img: "oatmeal.jpeg",
            video: "https://www.youtube.com/results?search_query=oatmeal+healthy+recipe",
            alert: "⚠️ Avoid adding too much sugar or honey.",
          },
          {
            name: "Grilled Chicken Salad",
            uses: "High-protein, low-carb meal for fat reduction and muscle retention.",
            img: "chickensalad.jpeg",
            video: "https://www.youtube.com/results?search_query=grilled+chicken+salad",
            alert: "⚠️ Avoid creamy dressings high in calories.",
          },
          {
            name: "Green Smoothies",
            uses: "Rich in vitamins, fiber, and low in calories.",
            img: "greensmoothies.jpeg",
            video: "https://www.youtube.com/results?search_query=green+smoothie+recipe",
            alert: "⚠️ Avoid adding too much fruit juice or sugar.",
          },
        ],
      },
      female: {
        workouts: [
          {
            name: "Brisk Walking / Jogging",
            uses: "Burns calories, improves stamina and cardiovascular health.",
            img: "jogging.jpeg",
            video: "https://www.youtube.com/results?search_query=brisk+walking+jogging",
            alert: "✅ Safe for most healthy individuals.",
          },
          {
            name: "Jump Rope (Skipping)",
            uses: "Excellent cardio, burns high calories, tones legs.",
            img: "jumprope.jpeg",
            video: "https://www.youtube.com/results?search_query=jump+rope+exercise",
            alert: "⚠️ Avoid if you have knee problems.",
          },
          {
            name: "Dance Workouts / Zumba",
            uses: "Fun way to burn fat and improve flexibility.",
            img: "Dance2.jpeg",
            video: "https://www.youtube.com/results?search_query=zumba+workout",
            alert: "✅ Safe for most people, but avoid if you have joint pain.",
          },
          {
            name: "Cycling",
            uses: "Strengthens legs, burns fat, and improves stamina.",
            img: "cycling.jpeg",
            video: "https://www.youtube.com/results?search_query=cycling+workout",
            alert: "⚠️ Avoid if you have knee or hip pain.",
          },
          {
            name: "Squats + Lunges",
            uses: "Tones lower body and burns calories effectively.",
            img: "squats.jpeg",
            video: "https://www.youtube.com/results?search_query=squats+and+lunges",
            alert: "⚠️ Avoid if you have knee problems.",
          },
          {
            name: "Pilates / Yoga",
            uses: "Improves flexibility, tones muscles, and supports fat loss.",
            img: "yoga.jpeg",
            video: "https://www.youtube.com/results?search_query=pilates+yoga+for+weight+loss",
            alert: "✅ Generally safe, but modify poses if you have injuries.",
          },
        ],
        nutrition: [
          {
            name: "Green Smoothie",
            uses: "Rich in vitamins & fiber.",
            img: "greensmoothies.jpeg",
            video: "https://www.youtube.com/results?search_query=green+smoothie",
            alert: "⚠️ Avoid if digestion issues.",
          },
          {
            name: "Quinoa Salad",
            uses: "High-protein, fiber-rich, keeps energy up while reducing fat.",
            img: "Quinoasalad.jpg",
            video: "https://www.youtube.com/results?search_query=quinoa+salad+recipe",
            alert: "⚠️ Avoid heavy dressings or fried toppings.",
          },
          {
            name: "Vegetable Soup",
            uses: "Low-calorie, fills the stomach and improves metabolism.",
            img: "VegetableSoup.jpeg",
            video: "https://www.youtube.com/results?search_query=vegetable+soup+recipe",
            alert: "⚠️ Avoid adding cream or excess salt.",
          },
          {
            name: "Greek Yogurt with Nuts",
            uses: "Protein-rich snack that supports fat loss and digestion.",
            img: "yogurt.jpeg",
            video: "https://www.youtube.com/results?search_query=greek+yogurt+snack",
            alert: "⚠️ Avoid flavored yogurts high in sugar.",
          },
        ],
      },
    },
    gain: {
      male: {
        workouts: [
          {
            name: "Bench Press",
            uses: "Builds chest, shoulders, and triceps.",
            img: "benchpress.jpeg",
            video: "https://www.youtube.com/results?search_query=bench+press",
            alert: "⚠️ Avoid if you have shoulder injuries.",
          },
          {
            name: "Pull-ups / Chin-ups",
            uses: "Strengthens back, arms, and core.",
            img: "pullups.jpeg",
            video: "https://www.youtube.com/results?search_query=pull+ups",
            alert: "⚠️ Not suitable for beginners without assistance.",
          },
          {
            name: "Deadlifts",
            uses: "Boosts metabolism and builds overall strength.",
            img: "deadlifts.jpeg",
            video: "https://www.youtube.com/results?search_query=deadlifts+exercise",
            alert: "⚠️ Not recommended for people with lower back injuries.",
          },
          {
            name: "Squats (Weighted)",
            uses: "Builds lower body strength and muscle mass.",
            img: "squats.jpeg",
            video: "https://www.youtube.com/results?search_query=weighted+squats",
            alert: "⚠️ Avoid if you have knee problems.",
          },
          {
            name: "Overhead Shoulder Press",
            uses: "Strengthens shoulders and upper body.",
            img: "overheadshoulderpress.jpeg",
            video: "https://www.youtube.com/results?search_query=overhead+shoulder+press",
            alert: "⚠️ Avoid if you have rotator cuff injuries.",
          },
          {
            name: "Bicep Curls + Tricep Dips",
            uses: "Builds arm muscles and improves definition.",
            img: "bicep.jpeg",
            video: "https://www.youtube.com/results?search_query=bicep+curls+tricep+dips",
            alert: "✅ Safe for most people.",
          },
        ],
        nutrition: [
          {
            name: "Protein Shake",
            uses: "Supports muscle growth.",
            img: "proteinshake.jpeg",
            video: "https://www.youtube.com/results?search_query=protein+shake",
            alert: "⚠️ Not for lactose intolerant.",
          },
          {
            name: "Peanut Butter Banana Smoothie",
            uses: "High-calorie, protein-packed drink to build muscle mass.",
            img: "peanutbutter.jpeg",
            video: "https://www.youtube.com/results?search_query=peanut+butter+banana+smoothie",
            alert: "⚠️ Consume in moderation to avoid excessive fat gain.",
          },
          {
            name: "Eggs with Whole Grain Toast",
            uses: "Protein-rich meal that supports muscle growth.",
            img: "eggstoast.jpeg",
            video: "https://www.youtube.com/results?search_query=eggs+whole+grain+toast",
            alert: "⚠️ Limit butter or oil to reduce extra calories.",
          },
          {
            name: "Nuts and Dry Fruits Mix",
            uses: "High-energy snack rich in healthy fats and protein.",
            img: "nuts.jpeg",
            video: "https://www.youtube.com/results?search_query=nuts+dry+fruits+snack",
            alert: "⚠️ Avoid sugary coatings or salted nuts.",
          },
        ],
      },
      female: {
        workouts: [
          {
            name: "Squats (Bodyweight → Weighted)",
            uses: "Tones legs and builds strength in lower body.",
            img: "squats.jpeg",
            video: "https://www.youtube.com/results?search_query=bodyweight+to+weighted+squats",
            alert: "⚠️ Avoid if you have knee issues.",
          },
          {
            name: "Hip Thrusts / Glute Bridges",
            uses: "Strengthens glutes and hamstrings.",
            img: "hipthrusts.jpeg",
            video: "https://www.youtube.com/results?search_query=hip+thrusts+glute+bridges",
            alert: "✅ Safe for most, use support if needed.",
          },
          {
            name: "Lunges (Forward/Reverse)",
            uses: "Builds leg strength and balance.",
            img: "lunges.jpeg",
            video: "https://www.youtube.com/results?search_query=lunges+exercise",
            alert: "⚠️ Avoid if you have ankle or knee injuries.",
          },
          {
            name: "Push-ups (Incline for Beginners)",
            uses: "Builds chest, shoulders, and arms.",
            img: "pushups.jpeg",
            video: "https://www.youtube.com/results?search_query=incline+pushups",
            alert: "✅ Beginner-friendly option.",
          },
          {
            name: "Resistance Band Workouts",
            uses: "Improves muscle tone and flexibility.",
            img: "resistanceband.jpeg",
            video: "https://www.youtube.com/results?search_query=resistance+band+workout",
            alert: "✅ Low-impact and joint friendly.",
          },
          {
            name: "Plank Variations (for Core)",
            uses: "Strengthens core and improves posture.",
            img: "planks.jpeg",
            video: "https://www.youtube.com/results?search_query=plank+variations",
            alert: "⚠️ Avoid if you have lower back pain.",
          },
        ],
        nutrition: [
          {
            name: "Greek Yogurt with Nuts",
            uses: "High protein snack.",
            img: "yogurt.jpeg",
            video: "https://www.youtube.com/results?search_query=greek+yogurt+with+nuts",
            alert: "⚠️ Avoid if nut/lactose allergy.",
          },
          {
            name: "Avocado Toast with Egg",
            uses: "Healthy fats and protein to support weight gain and muscle tone.",
            img: "avocadotoast.jpeg",
            video: "https://www.youtube.com/results?search_query=avocado+toast+egg",
            alert: "⚠️ Avoid excess oil or butter.",
          },
          {
            name: "Smoothie with Milk, Banana, and Almonds",
            uses: "High-calorie, nutrient-dense drink to increase healthy weight.",
            img: "smoothie.jpeg",
            video: "https://www.youtube.com/results?search_query=banana+almond+smoothie",
            alert: "⚠️ Avoid adding extra sugar.",
          },
          {
            name: "Chickpea and Paneer Salad",
            uses: "Protein and fiber-rich meal that supports healthy weight gain.",
            img: "paneersalad.jpeg",
            video: "https://www.youtube.com/results?search_query=chickpea+paneer+salad",
            alert: "⚠️ Avoid creamy dressings.",
          },
        ],
      },
    },
    height: {
      male: {
        workouts: [
          {
            name: "Hanging from Bar",
            uses: "Stretches the spine and improves posture.",
            img: "hanging.jpeg",
            video: "https://www.youtube.com/results?search_query=hanging+from+bar+exercise",
            alert: "⚠️ Avoid if you have shoulder or back injuries.",
          },
          {
            name: "Cobra Stretch",
            uses: "Improves flexibility of the spine and strengthens back muscles.",
            img: "cobra_stretch.jpeg",
            video: "https://www.youtube.com/results?search_query=cobra+stretch",
            alert: "⚠️ Avoid if you have wrist or lower back issues.",
          },
          {
            name: "Cat-Cow Stretch",
            uses: "Enhances spine mobility and posture.",
            img: "catcowstretch.jpeg",
            video: "https://www.youtube.com/results?search_query=cat+cow+stretch",
            alert: "⚠️ Move slowly if you have back pain.",
          },
          {
            name: "Jumping (Basketball/Volleyball style)",
            uses: "Promotes leg strength and overall body stretch.",
            img: "jumping.jpeg",
            video: "https://www.youtube.com/results?search_query=basketball+jumping+exercise",
            alert: "⚠️ Avoid on hard surfaces to prevent joint injuries.",
          },
          {
            name: "Swimming",
            uses: "Full-body stretch and improves posture.",
            img: "swimming.jpeg",
            video: "https://www.youtube.com/results?search_query=swimming+exercise",
            alert: "⚠️ Avoid if you have shoulder injuries or breathing issues.",
          },
        ],
        nutrition: [
          {
            name: "Milk or Soy Milk",
            uses: "Rich in calcium and vitamin D, promotes bone growth.",
            img: "milk.jpeg",
            video: "https://www.youtube.com/results?search_query=milk+benefits",
            alert: "⚠️ Avoid flavored milks with excess sugar.",
          },
          {
            name: "Eggs",
            uses: "High-quality protein and vitamin D to support bone development.",
            img: "eggs.jpeg",
            video: "https://www.youtube.com/results?search_query=eggs+nutrition",
            alert: "⚠️ Avoid overcooking which reduces nutrient content.",
          },
          {
            name: "Leafy Greens (Spinach, Kale)",
            uses: "Rich in calcium, magnesium, and vitamins for bone health.",
            img: "leafy.jpeg",
            video: "https://www.youtube.com/results?search_query=leafy+greens+recipes",
            alert: "⚠️ Cook lightly to preserve nutrients.",
          },
          {
            name: "Fish (Salmon, Sardines)",
            uses: "Omega-3 and vitamin D support bone and height growth.",
            img: "fish.jpeg",
            video: "https://www.youtube.com/results?search_query=fish+healthy+recipes",
            alert: "⚠️ Avoid deep-fried fish or processed fish products.",
          },
        ],
      },
      female: {
        workouts: [
          {
            name: "Surya Namaskar (Sun Salutation)",
            uses: "Enhances flexibility and stretches the entire body.",
            img: "tree.jpeg",
            video: "https://www.youtube.com/results?search_query=surya+namaskar",
            alert: "⚠️ Avoid if you have dizziness or severe back issues.",
          },
          {
            name: "Forward Bend Stretch",
            uses: "Stretches hamstrings and spine for better posture.",
            img: "forwardbendstretch.jpeg",
            video: "https://www.youtube.com/results?search_query=forward+bend+stretch",
            alert: "⚠️ Avoid if you have lower back or hamstring injuries.",
          },
          {
            name: "Pilates Roll-over",
            uses: "Strengthens core and elongates the spine.",
            img: "pilatesroll.jpeg",
            video: "https://www.youtube.com/results?search_query=pilates+roll+over",
            alert: "⚠️ Avoid if you have neck or back injuries.",
          },
          {
            name: "Side Stretch",
            uses: "Improves flexibility of obliques and spine.",
            img: "https://via.placeholder.com/220x180.png?text=Side+Stretch",
            video: "https://www.youtube.com/results?search_query=side+stretch",
            alert: "⚠️ Move gently if you have rib or side muscle injuries.",
          },
          {
            name: "Skipping Rope",
            uses: "Promotes leg strength, posture, and overall stretch.",
            img: "https://via.placeholder.com/220x180.png?text=Skipping+Rope",
            video: "https://www.youtube.com/results?search_query=skipping+rope+exercise",
            alert: "⚠️ Avoid on hard surfaces or if you have ankle injuries.",
          },
        ],
        nutrition: [
          {
            name: "Milk or Soy Milk",
            uses: "Rich in calcium and vitamin D, promotes bone growth.",
            img: "https://via.placeholder.com/220x180.png?text=Milk",
            video: "https://www.youtube.com/results?search_query=milk+benefits",
            alert: "⚠️ Avoid flavored milks with excess sugar.",
          },
          {
            name: "Eggs",
            uses: "High-quality protein and vitamin D to support bone development.",
            img: "https://via.placeholder.com/220x180.png?text=Eggs",
            video: "https://www.youtube.com/results?search_query=eggs+nutrition",
            alert: "⚠️ Avoid overcooking which reduces nutrient content.",
          },
          {
            name: "Leafy Greens (Spinach, Kale)",
            uses: "Rich in calcium, magnesium, and vitamins for bone health.",
            img: "https://via.placeholder.com/220x180.png?text=Leafy+Greens",
            video: "https://www.youtube.com/results?search_query=leafy+greens+recipes",
            alert: "⚠️ Cook lightly to preserve nutrients.",
          },
          {
            name: "Fish (Salmon, Sardines)",
            uses: "Omega-3 and vitamin D support bone and height growth.",
            img: "https://via.placeholder.com/220x180.png?text=Fish",
            video: "https://www.youtube.com/results?search_query=fish+healthy+recipes",
            alert: "⚠️ Avoid deep-fried fish or processed fish products.",
          },
        ],
      },
    },
  };

  // Generate plan: use selected goal + gender. Age is kept in state (4 options) but not used to alter content.
  const generatePlan = () => {
    const defaultPlan = { workouts: [], nutrition: [] };
    const selected = (plans[goal] && plans[goal][gender]) || defaultPlan;
    // set the full arrays (all items)
    setWorkouts(selected.workouts || []);
    setNutrition(selected.nutrition || []);
  };

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?fitness,gym')" }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-95 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
          Physical Fitness Plan
        </h2>

        {/* Filters */}
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-2 block w-full rounded-lg border-gray-300 p-2"
              >
                <option value="teen">10-18 years</option>
                <option value="adult">19-30 years</option>
                <option value="mid">31-50 years</option>
                <option value="senior">50+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-2 block w-full rounded-lg border-gray-300 p-2"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Goal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="mt-2 block w-full rounded-lg border-gray-300 p-2"
              >
                <option value="loss">Weight Loss</option>
                <option value="gain">Weight Gain</option>
                <option value="height">Height Increase</option>
              </select>
            </div>
          </div>

          <button
            onClick={generatePlan}
            className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-800"
          >
            Get Plan
          </button>
        </div>

        {/* Workouts */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">Recommended Workouts</h3>
          {workouts.length === 0 ? (
            <p className="text-gray-600">No workouts chosen yet. Click “Get Plan” to see recommendations.</p>
          ) : (
            <div className="space-y-4">
              {workouts.map((ex, i) => (
                <div key={i} className="flex bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={ex.img} alt={ex.name} className="w-48 h-36 object-cover" />
                  <div className="p-4 flex-1">
                    <h4 className="text-lg font-semibold">{ex.name}</h4>
                    <p className="text-gray-700 mt-1"><strong>Uses:</strong> {ex.uses}</p>
                    <a href={ex.video} target="_blank" rel="noreferrer" className="inline-block mt-2 text-blue-600 font-bold">
                      ▶ Watch Video
                    </a>
                    <div className="mt-3 text-sm text-red-700 bg-red-100 p-2 rounded">{ex.alert}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Nutrition */}
        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-4">Recommended Nutrition</h3>
          {nutrition.length === 0 ? (
            <p className="text-gray-600">No nutrition tips chosen yet. Click “Get Plan” to see recommendations.</p>
          ) : (
            <div className="space-y-4">
              {nutrition.map((food, i) => (
                <div key={i} className="flex bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={food.img} alt={food.name} className="w-48 h-36 object-cover" />
                  <div className="p-4 flex-1">
                    <h4 className="text-lg font-semibold">{food.name}</h4>
                    <p className="text-gray-700 mt-1"><strong>Uses:</strong> {food.uses}</p>
                    <a href={food.video} target="_blank" rel="noreferrer" className="inline-block mt-2 text-blue-600 font-bold">
                      ▶ Watch Video
                    </a>
                    <div className="mt-3 text-sm text-red-700 bg-red-100 p-2 rounded">{food.alert}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

