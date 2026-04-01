import "./style.css";

const button = document.querySelector("#search-button") as HTMLButtonElement;
const input = document.querySelector("#search-input") as HTMLInputElement;

const creatureName = document.getElementById("creature-name") as HTMLElement;
const creatureId = document.getElementById("creature-id") as HTMLElement;
const weight = document.getElementById("weight") as HTMLElement;
const height = document.getElementById("height") as HTMLElement;
const types = document.getElementById("types") as HTMLElement;
const hp = document.getElementById("hp") as HTMLElement;
const attack = document.getElementById("attack") as HTMLElement;
const defense = document.getElementById("defense") as HTMLElement;
const specialAttack = document.getElementById("special-attack") as HTMLElement;
const specialDefense = document.getElementById(
  "special-defense",
) as HTMLElement;
const speed = document.getElementById("speed") as HTMLElement;

interface CreatureDetail {
  height: number;
  id: number;
  name: string;
  weight: number;
  stats: {
    base_stat: number;
    name: string;
  }[];
  types: {
    name: string;
  }[];
}

const fetchData = async (): Promise<void> => {
  const query = input.value.toLocaleLowerCase().trim();
  if (!query) return;

  try {
    const response = await fetch(
      `https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`,
    );

    if (!response.ok) {
      throw new Error("Creature not found");
    }

    const data: CreatureDetail = await response.json();
    updateUI(data);
  } catch (error) {
    resetUI();
    alert("Creature not found");
  }
};

const updateUI = (data: CreatureDetail): void => {
  creatureName.textContent = data.name.toUpperCase();
  creatureId.textContent = data.id.toString();
  weight.textContent = data.weight.toString();
  height.textContent = data.height.toString();

  const getStat = (name: string): string => {
    const found = data.stats.find((s) => s.name === name);
    return found ? found.base_stat.toString() : "0";
  };

  hp.textContent = getStat("hp");
  attack.textContent = getStat("attack");
  defense.textContent = getStat("defense");
  specialAttack.textContent = getStat("special-attack");
  specialDefense.textContent = getStat("special-defense");
  speed.textContent = getStat("speed");

  types.innerHTML = "";

  data.types.forEach((obj) => {
    const typeSpan = document.createElement("span");

    typeSpan.textContent = obj.name.toUpperCase();

    types.appendChild(typeSpan);
  });
};

const resetUI = (): void => {
  creatureName.textContent = "";
  creatureId.textContent = "";
  types.innerHTML = "";
  weight.textContent = "";
  height.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
};

button.addEventListener("click", fetchData);
