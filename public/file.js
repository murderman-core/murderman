function loadFromFile(path) 
{
    var fr = new FileReader();

    fr.readAsText(path);

    return fr.result;
}