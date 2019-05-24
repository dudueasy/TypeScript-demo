{
    {
        /*
        * demo1 keyof
        * */

        interface Student {
            name: string,
            age: number,
            grade: number
        }


        type keyOfStudent = keyof Student

        type HighSchoolStudent = Student & { speciality: string }

        type keyOfHighSchoolStudent = keyof HighSchoolStudent


        interface Map<T> {
            [key: number]: T;

            [key: string]: T;
        }

        let keys: keyof Map<number>; // number | string
        let value: Map<number>['foo']; // number
    }


    {
        /*
        * demo2: Index Type
        */

        function jsPluck(obj, objFieldnameList) {
            return objFieldnameList.map(n => obj[n]);
        }

        let y = jsPluck({name: 'apolo', age: 20}, ['name', 'age']);
        console.log(y);

        function tsPluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
            return names.map(n => o[n]);
        }

        interface Person {
            name: string;
            age: number;
        }

        let person: Person = {
            name: 'Jarid',
            age: 35
        };

        let x = tsPluck(person, ['name', 'age']);
        console.log(x);

    }
    {
        /*
         * demo3: Mapped Type
         */

        type Partial<T> = {
            [P in keyof T]?: T[P];
        }

        type Readonly<T> = {
            readonly [P in keyof T]: T[P]
        }

        interface Person {
            [xxx: string]: string
            // name: string;
            // age: number;
        }

        type PartialPerson = Partial<Person>

        const xx: PartialPerson = {name: 'axx'};

    }
}