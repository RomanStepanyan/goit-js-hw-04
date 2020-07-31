  const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
  
      this.items.push(itemName);
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
  
      this.items = this.items.filter(item => item !== itemName);
    },
  };
  
  const invokeInventoryAction = function(itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    const actionInvertory = action.bind(inventory)
    actionInvertory(itemName);
  };

  const invokeInventoryCall = function(itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    
    action.call(inventory, itemName);
  };

  const invokeInventoryApply = function(itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    
    action.apply(inventory, [itemName]);
  };

  
  invokeInventoryAction('Medkit', inventory.add);
  invokeInventoryCall('Medkit', inventory.add);
  invokeInventoryApply('Medkit', inventory.add)

  // Invoking action on Medkit
  // Adding Medkit to inventory
  
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
  invokeInventoryAction('Gas mask', inventory.remove);
  invokeInventoryCall('Gas mask', inventory.remove);
  invokeInventoryApply('Gas mask', inventory.remove);

  // Invoking action on Gas mask
  // Removing Gas mask from inventory
  
  console.log(inventory.items); // ['Knife', 'Medkit']


