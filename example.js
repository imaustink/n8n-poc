for (const item of $input.all()) {
  item.json.test = "Hello world!";
}

return $input.all();