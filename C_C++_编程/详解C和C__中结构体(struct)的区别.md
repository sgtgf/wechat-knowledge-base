# 详解C和C++中结构体(struct)的区别


> 原文地址: [https://mp.weixin.qq.com/s/neZcJaMg8rp7Kxd7BygIig](https://mp.weixin.qq.com/s/neZcJaMg8rp7Kxd7BygIig)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRETdLuoXm0tb44UfjgmvRS6P1M967JtDlLWQ9QowbhyiaYVxjh01c4PE9d35w8cxmmULV5hicic43me1uh6IdAyQ/640?wx_fmt=jpeg&from=appmsg)

C 和 C++ 是两种广泛使用的编程语言，它们之间有着密切的关系，但也有着显著的区别。特别是在数据结构方面，如结构体（`struct`），这两种语言提供了不同的特性和功能。本文将详细介绍 C 和 C++ 中结构体的主要区别，并通过具体的代码示例来帮助读者更好地理解这些差异。

## C 和 C++ 结构体的基本概念

在 C 语言中，结构体是一种用户定义的数据类型，用于将不同类型的数据组合在一起。结构体中的每个成员都有自己的数据类型，并且可以通过结构体实例来访问这些成员。例如：

`// C 语言中的结构体定义   struct Person {       char name[50];       int age;       float height;   };      // 创建结构体实例并访问成员   struct Person p1;   strcpy(p1.name, "Alice");   p1.age = 30;   p1.height = 5.8;   `

在 C++ 中，结构体不仅继承了 C 语言中结构体的所有特性，还增加了一些新的功能，使其更接近于类（`class`）。因此，C++ 中的结构体可以包含成员函数、静态成员、构造函数等。例如：

`// C++ 语言中的结构体定义   struct Person {       char name[50];       int age;       float height;          // 成员函数       void display() {           cout << "Name: " << name << ", Age: " << age << ", Height: " << height << endl;       }          // 构造函数       Person(const char* n, int a, float h) {           strcpy(name, n);           age = a;           height = h;       }   };      // 创建结构体实例并调用成员函数   Person p1("Alice", 30, 5.8);   p1.display();   `

## C 和 C++ 结构体的主要区别

### 成员函数

在 C 语言中，结构体只能包含数据成员，不能包含成员函数。如果需要对结构体成员进行操作，通常需要在外部定义函数。例如：

`// C 语言中的结构体和外部函数   struct Person {       char name[50];       int age;       float height;   };      void display(struct Person p) {       printf("Name: %s, Age: %d, Height: %.2f\n", p.name, p.age, p.height);   }      int main() {       struct Person p1;       strcpy(p1.name, "Alice");       p1.age = 30;       p1.height = 5.8;          display(p1);          return 0;   }   `

而在 C++ 中，结构体可以包含成员函数，这些函数可以直接操作结构体的成员。例如：

`// C++ 语言中的结构体和成员函数   struct Person {       char name[50];       int age;       float height;          void display() {           cout << "Name: " << name << ", Age: " << age << ", Height: " << height << endl;       }   };      int main() {       Person p1;       strcpy(p1.name, "Alice");       p1.age = 30;       p1.height = 5.8;          p1.display();          return 0;   }   `

### 静态成员

在 C 语言中，结构体不能有静态成员。静态成员是在整个程序生命周期中都存在的变量，通常用于存储全局状态或计数器。例如：

`// C 语言中的结构体尝试添加静态成员（会报错）   struct Record {       int id;       static int count;  // 错误：C 语言不支持结构体中的静态成员   };   `

而在 C++ 中，结构体可以有静态成员。静态成员在整个程序中只有一个副本，所有结构体实例共享同一个静态成员。例如：

`// C++ 语言中的结构体和静态成员   struct Record {       int id;       static int count;          Record() {           count++;       }   };      int Record::count = 0;  // 初始化静态成员      int main() {       Record r1;       Record r2;          cout << "Total records: " << Record::count << endl;         // 输出：Total records: 2          return 0;   }   `

### 构造函数

在 C 语言中，结构体不能有构造函数。构造函数是一种特殊的成员函数，用于在创建对象时初始化对象的状态。例如：

`// C 语言中的结构体尝试添加构造函数（会报错）   struct Student {       int roll;       Student(int x) {  // 错误：C 语言不支持结构体中的构造函数           roll = x;       }   };   `

而在 C++ 中，结构体可以有构造函数。构造函数使得对象的初始化更加方便和安全。例如：

`// C++ 语言中的结构体和构造函数   struct Student {       int roll;          Student(int x) {           roll = x;       }   };      int main() {       Student s1(10);       cout << "Roll number: " << s1.roll << endl;  // 输出：Roll number: 10          return 0;   }   `

### 直接初始化数据成员

在 C 语言中，结构体的数据成员不能在定义时直接初始化。例如：

`// C 语言中的结构体尝试直接初始化数据成员（会报错）   struct Record {       int x = 7;  // 错误：C 语言不支持直接初始化数据成员   };   `

而在 C++ 中，结构体的数据成员可以在定义时直接初始化。这种初始化方式使得结构体的使用更加灵活和方便。例如：

`// C++ 语言中的结构体和直接初始化数据成员   struct Record {       int x = 7;   };      int main() {       Record r1;       cout << "Value of x: " << r1.x << endl;  // 输出：Value of x: 7          return 0;   }   `

### 使用 `struct` 关键字

在 C 语言中，声明结构体变量时必须使用 `struct` 关键字。例如：

`// C 语言中的结构体变量声明   struct Person {       char name[50];       int age;       float height;   };      int main() {       struct Person p1;  // 必须使用 struct 关键字       strcpy(p1.name, "Alice");       p1.age = 30;       p1.height = 5.8;          return 0;   }   `

而在 C++ 中，声明结构体变量时可以省略 `struct` 关键字。例如：

`// C++ 语言中的结构体变量声明   struct Person {       char name[50];       int age;       float height;   };      int main() {       Person p1;  // 可以省略 struct 关键字       strcpy(p1.name, "Alice");       p1.age = 30;       p1.height = 5.8;          return 0;   }   `

### 访问修饰符和数据隐藏

在 C 语言中，结构体没有访问修饰符的概念。所有成员都是公开的（`public`），不支持数据隐藏的概念，可以从任何地方访问。例如：

`// C 语言中的结构体成员访问   struct Person {       char name[50];       int age;       float height;   };      int main() {       struct Person p1;       strcpy(p1.name, "Alice");       p1.age = 30;       p1.height = 5.8;          return 0;   }   `

而在 C++ 中，结构体支持访问修饰符，如 `public`、`private` 和 `protected`。这些修饰符可以控制成员的访问权限，从而实现数据封装和保护。例如：

`// C++ 语言中的结构体和访问修饰符   struct Person {   private:       char name[50];       int age;       float height;      public:       void setDetails(const char* n, int a, float h) {           strcpy(name, n);           age = a;           height = h;       }          void display() {           cout << "Name: " << name << ", Age: " << age << ", Height: " << height << endl;       }   };      int main() {       Person p1;       p1.setDetails("Alice", 30, 5.8);       p1.display();          return 0;   }   `

### 指针和引用

在 C 语言中，只能使用指针来引用结构体。例如：

`// C 语言中的结构体指针   struct Person {       char name[50];       int age;       float height;   };      int main() {       struct Person p1;       strcpy(p1.name, "Alice");       p1.age = 30;       p1.height = 5.8;          struct Person *ptr = &p1;       printf("Name: %s, Age: %d, Height: %.2f\n", ptr->name, ptr->age, ptr->height);          return 0;   }   `

而在 C++ 中，不仅可以使用指针，还可以使用引用（`reference`）来引用结构体。引用是一个别名，它提供了一种更安全和方便的方式来访问对象。例如：

`// C++ 语言中的结构体指针和引用   struct Person {       char name[50];       int age;       float height;   };      int main() {       Person p1;       strcpy(p1.name, "Alice");       p1.age = 30;       p1.height = 5.8;          Person &ref = p1;       cout << "Name: " << ref.name << ", Age: " << ref.age << ", Height: " << ref.height << endl;          return 0;   }   `

### `sizeof` 运算符

在 C 语言中，`sizeof` 运算符对空结构体返回 0。例如：

`// C 语言中的空结构体   struct Empty {};      int main() {       struct Empty e;       printf("Size of empty struct: %lu\n", sizeof(e));         // 输出：Size of empty struct: 0          return 0;   }   `

而在 C++ 中，`sizeof` 运算符对空结构体返回 1。这是为了确保空结构体在内存中占用一定的空间，从而避免某些编译器优化带来的问题。例如：

`// C++ 语言中的空结构体   struct Empty {};      int main() {       Empty e;       cout << "Size of empty struct: " << sizeof(e) << endl;         // 输出：Size of empty struct: 1          return 0;   }   `

## 小结

C 和 C++ 在结构体方面的差异主要体现在以下几个方面：

-   **成员函数**：C++ 支持结构体中包含成员函数，而 C 不支持。
    
-   **静态成员**：C++ 支持结构体中包含静态成员，而 C 不支持。
    
-   **构造函数**：C++ 支持结构体中包含构造函数，而 C 不支持。
    
-   **直接初始化数据成员**：C++ 支持结构体中直接初始化数据成员，而 C 不支持。
    
-   **使用 `struct` 关键字**：C++ 可以省略 `struct` 关键字，而 C 必须使用。
    
-   **访问修饰符和数据隐藏**：C++ 支持结构体中的访问修饰符和数据隐藏，而 C 不支持。
    
-   **指针和引用**：C++ 支持结构体的引用，而 C 只支持指针。
    
-   **`sizeof` 运算符**：C++ 对空结构体返回 1，而 C 返回 0。
    

这些差异使得 C++ 中的结构体更加灵活和强大，能够更好地支持面向对象编程的概念。希望本文能帮助读者更好地理解和掌握 C 和 C++ 中结构体的区别。

# 推荐阅读

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/eRETdLuoXm1hlcFzRLY8530oa5qlVg14Sp7ykiaiaeksse1OriavStBSZ3aOeSRibrictsMImSUmYpM8KlkR2oh16xA/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRETdLuoXm0F1TJuz7SHvpW1zgzV6ZIF0r5H99lwcz5CHLoNtLjOXfQpElKKhKEE3Eiapa05EFDfBlOlExx8iaOw/640?wx_fmt=other&from=appmsg&random=0.07403834435997281&random=0.9548404603232596&random=0.104285335892905&random=0.6465628742284186&random=0.7114643948388735&random=0.39825419144728924&random=0.5036513307316739&random=0.24264210905518024&random=0.8403119589921406&random=0.004225922898027479&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)