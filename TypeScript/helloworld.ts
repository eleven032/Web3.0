const s:string = '新的开始';




console.log(s);


const flag:boolean = true;
const count:number = 10;
let name1:string = 'name';
console.log(flag,  count, name1);


enum Color {
    red,
    pink,
    blue
};
const red:Color = Color.red;
console.log(red);

const arr:number[] = [1, 2, 3];
const arr2:Array<number> = arr;

const tuple: [number, string] = [1, 'two'];
console.log(tuple);


function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
  return x + y;
}


const a:any = add('1', '2');    
console.log(a);
