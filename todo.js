  // Référence aux éléments HTML
  const addButton = document.getElementById('addButton');
  const deleteButton = document.getElementById('deleteButton');
  const todoContainer = document.getElementById('todoContainer');

  // Fonction pour afficher la todo list depuis le localStorage
  function displayTodoList() {
      // Récupère la liste des éléments du localStorage (ou un tableau vide s'il n'y en a pas)
      let todos = JSON.parse(localStorage.getItem("todoList")) || [];
      
      // Vider le conteneur actuel
      todoContainer.innerHTML = '';

      // Afficher chaque élément dans le conteneur
      todos.forEach(todo => {
          const folder = document.createElement('div');
          folder.className = 'folder';
          folder.textContent = todo;
          todoContainer.appendChild(folder);
      });
  }

  // Fonction pour ajouter un élément à la liste
  function addList() {
      const name = prompt("Add item to list:");
      if (name) {
          // Récupère la liste actuelle depuis le localStorage
          let todos = JSON.parse(localStorage.getItem("todoList")) || [];
          todos.push(name); // Ajouter l'élément à la liste

          // Mettre à jour le localStorage
          localStorage.setItem("todoList", JSON.stringify(todos));

          // Réafficher la liste
          displayTodoList();
      }
  }

  // Fonction pour supprimer le dernier élément
  function deleteLastItem() {
      let todos = JSON.parse(localStorage.getItem("todoList")) || [];
      if (todos.length > 0) {
          todos.pop();  // Supprimer le dernier élément

          // Mettre à jour le localStorage
          localStorage.setItem("todoList", JSON.stringify(todos));

          // Réafficher la liste
          displayTodoList();
      } else {
          alert("No items to delete!");
      }
  }

  // Initialiser l'affichage de la todo list
  displayTodoList();

  // Associer les événements aux boutons
  addButton.addEventListener('click', addList);
  deleteButton.addEventListener('click', deleteLastItem);