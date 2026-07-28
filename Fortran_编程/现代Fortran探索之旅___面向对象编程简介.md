随着计算科学的发展，Fortran 作为一门历史悠久且广泛应用的编程语言，不断进化以适应现代软件开发的需求。Fortran 2003 标准引入了一系列面向对象编程（Object-Oriented Programming, OOP）的功能，这使得 Fortran 程序员能够更加灵活地构建复杂的程序结构。本文将详细介绍 Fortran 中的面向对象编程概念，并通过具体示例展示如何在实际项目中应用这些特性。

## 什么是面向对象编程？

面向对象编程是一种「编程范式」，它将数据和操作数据的方法封装在一起，形成一个独立的单元——「对象」。每个对象都是某个类的实例，而「类」则是定义了一组属性和方法的模板。通过「继承机制」，子类可以继承父类的属性和方法，并在此基础上进行扩展或修改。此外，「多态性」允许不同类型的对象以相同的方式响应同一消息，从而提高代码的灵活性和复用性。

在 Fortran 2003 中，面向对象编程的主要特性包括：

-   「类型定义（Type Definition）」：使用 `type` 关键字定义新的数据类型，类似于其他语言中的类。
    
-   「继承（Inheritance）」：通过 `extends` 关键字实现类的继承。
    
-   「多态（Polymorphism）」：通过 `class` 关键字和多态指针等实现多态性。
    

## 类型定义与封装

在Fortran中，面向对象编程的核心概念是`type`，它类似于其他语言中的“类”。通过`type`，我们可以定义包含数据成员和成员函数的数据类型。我们从一个简单的例子开始，定义一个表示二维向量的类 `vec2`。

`module vec2_module     implicit none     ! 定义一个二维向量类型     type :: vec2       real :: x, y     contains       procedure :: norm => vec2_norm     end type vec2   contains     ! 成员函数定义，计算向量的模     real function vec2_norm(this)       class(vec2), intent(in) :: this       vec2_norm = sqrt(this%x**2 + this%y**2)     end function vec2_norm   end module vec2_module   `

在这个模块中，我们定义了一个 `vec2` 类型，包含两个实数成员 `x` 和 `y`，以及一个成员函数 `norm`，用于计算向量的模。

需要说明的是，由于 Fortran 类型的成员函数体不能写在`type`内，同时为了避免发生函数重名，所以提供了像`procedure :: norm => vec2_norm`这样的语法来给类方法重命名。

在成员函数定义的过程中，我们需要显式的给出类似于 C++ 中的`"this"`指针，并使用 `class` 关键字指定它的类型。`class` 是 `type` 关键字的变形。在常规的 Fortran 程序中，如果使用了 `type` 关键字，过程中形参的类型和调用时相应的实参应该完全匹配，否则将会引发错误。类似地，指针类型和它所指向的类型也必须匹配，不然的话，也会有错误发生。`class` 关键字以一种特殊的方式放宽了这个要求。如果一个可分配数据项、指针、形参，用 `class(T)`  声明，这里 `T` 是一个派生数据类型，那么数据项将与数据型或数据类型的所有扩展相匹配。这就为后面「多态」的引入做好了准备。

## 对象创建与成员函数调用

接下来，我们可以在主程序中创建`vec2`类型的对象，并调用其成员函数。

`program main     use vec2_module     implicit none     type(vec2) :: v  ! 创建一个circle类型的对象        ! 初始化对象     v%x = 3.0     v%y = 4.0     ! 计算模     print *, "Vector 2D norm: ", v%norm()   end program main   `

编译并运行，得到

 `Vector 2D norm:    5.00000000`

在这个程序中，我们首先导入了`vec2_module`模块，然后创建了一个`vec2`类型的对象`v`。在对`v`的数据成员进行初始化之后，调用了成员函数`norm`来计算向量的模。

## 继承与多态

接下来，我们通过继承和多态展示如何扩展这个类。假设我们需要一个三维向量类 `vec3`，它可以继承 `vec2` 的所有属性和方法，并增加一个 `z` 分量。

`module vec3_module     use vec2_module     implicit none     ! 定义一个三维向量类型，继承自 vec2     type, extends(vec2) :: vec3       real :: z     contains       procedure :: norm => vec3_norm     end type vec3   contains     ! 计算三维向量的模     real function vec3_norm(this)       class(vec3), intent(in) :: this       vec3_norm = sqrt(this%x**2 + this%y**2 + this%z**2)     end function vec3_norm   end module vec3_module   `

在这个模块中，我们定义了一个 `vec3` 类型，继承自 `vec2`。`vec3` 类型增加了 `z` 分量，并重写了 `norm` 方法以适应三维向量的需求。

## 多态的应用

为了展示多态性，我们可以编写一个函数，接受一个 `class(vec2)` 类型的参数，并调用其 `norm` 方法。这样，无论传入的是 `vec2` 还是 `vec3` 对象，都能正确计算其模。

`program main     use vec2_module     use vec3_module     implicit none        type(vec2) :: v2     type(vec3) :: v3     ! 初始化向量     v2%x = 1.0     v2%y = 1.0        v3%x = 1.0     v3%y = 1.0     v3%z = 1.0     ! 计算模     print *, "Vector 2D norm: ", calculate_norm(v2)     print *, "Vector 3D norm: ", calculate_norm(v3)      contains     ! 多态函数，接受 class(vec2) 类型的参数     real function calculate_norm(v)       class(vec2), intent(in) :: v       calculate_norm = v%norm()     end function calculate_norm   end program main   `

编译并运行，得到

 `Vector 2D norm:    1.41421354        Vector 3D norm:    1.73205078`

在这个程序中，`calculate_norm` 函数接受一个 `class(vec2)` 类型的参数，并调用其 `norm` 方法。由于 `vec3` 继承自 `vec2`，因此可以将 `vec3` 对象传递给 `calculate_norm` 函数，实现多态性。

## 小结

通过上述示例，我们展示了 Fortran 2003 中的面向对象编程特性，包括类型定义、继承和多态。这些特性使得 Fortran 成为一门更加现代化和灵活的语言，能够更好地满足现代计算科学的需求。无论是处理复杂的数值计算任务，还是构建大型软件系统，Fortran 的面向对象编程特性都提供了强大的支持。对于希望提升代码可维护性和扩展性的 Fortran 程序员来说，掌握这些面向对象编程技术是非常有价值的。