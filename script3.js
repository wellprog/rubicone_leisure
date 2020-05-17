// Объявили массив со словами
let words =
[
    'машина',
    'человек',
    'самолет',
    'корабль',
    'часы',
    'картина',
    'дерево',
    'гитара',
    'музыка',
    'коробка'
]

//выбрали слово
let word = words[Math.floor(Math.random() * words.length)];

// Создали итоговый массив
let itog = [];
let x = 5;

for (let i = 0; i < word.length; i++)
{
    itog[i] = "_";
}

let kolvo = word.length;
let bl = false;
let bl1 = true;
let arr = [];

while (kolvo>0)
{

    bl1 = true;
    bl = false;
    if (x == 0)
    {
        alert ("Вы проиграли :((( осталось 0 попыток")
        break;
    }
    // Выводим текущие состояние игры    
    alert(itog.join(" ") + " Попытки - " + x);

    //Запросим вариант ответа
    let answer = prompt('Угадайте букву, или нажмите отмена для выхода из игры');

    if (answer === null)  //выходим из игры
    {
        break;
    }

    else if (answer.length!==1)
    {
        alert('Введите одну букву');
    }

    else
    {
        for(let a = 0; a < arr.length; a++)
        {
            if(arr[a] == answer)
            {
                bl1 = false;
            }
        }
        for(let j = 0; j < word.length; j++)
        {
            if((word[j] == answer) && (bl1 == true))
            {
                itog[j] = answer;
                kolvo--;
                bl = true;
                arr.push(answer)
            }
        }
    }

    if (bl != true)
    {
        x--;
        alert("Не верно :(");
    }
}
if (kolvo == 0)
{
    alert ("Это победа!!! :D")
}
alert('Было загаданно слово ' + word);
