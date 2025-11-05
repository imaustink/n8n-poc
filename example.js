for (const item of $input.all()) {
  item.json.test = "Hello world!";
  delete item.json.data;
}

$input.all();