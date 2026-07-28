最近整理了一些 Python 可用的网格 IO、网格划分、网格可视化开源工具及其基本使用方法。测试环境：Windows11，Python3.9。测试网格文件：

-   test.inp: https://pan.baidu.com/s/1n\_PuLnd9gYGU2mf53VBbHw?pwd=1234
    
-   test.stl: https://pan.baidu.com/s/1xQ\_1NxOc1aEXOZuCiH67Xg?pwd=1234
    

### meshio

**meshio** 是非常强大，使用也非常广泛的网格数据读写和转换工具。根据主页介绍，**meshio** 目前支持如下格式的读写和转换：

> Abaqus (`.inp`), ANSYS msh (`.msh`), AVS-UCD (`.avs`), CGNS (`.cgns`), DOLFIN XML (`.xml`), Exodus (`.e`, `.exo`), FLAC3D (`.f3grid`), H5M (`.h5m`), Kratos/MDPA (`.mdpa`), Medit (`.mesh`, `.meshb`), MED/Salome (`.med`), Nastran (bulk data, `.bdf`, `.fem`, `.nas`), Netgen (`.vol`, `.vol.gz`), Neuroglancer precomputed format, Gmsh (format versions 2.2, 4.0, and 4.1, `.msh`), OBJ (`.obj`), OFF (`.off`), PERMAS (`.post`, `.post.gz`, `.dato`, `.dato.gz`), PLY (`.ply`), STL (`.stl`), Tecplot .dat, TetGen .node/.ele, SVG (2D output only) (`.svg`), SU2 (`.su2`), UGRID (`.ugrid`), VTK (`.vtk`), VTU (`.vtu`), WKT (TIN) (`.wkt`), XDMF (`.xdmf`, `.xmf`).

meshio 对象常用的属性包含 `points`、`cells` 和 `cells_dict`。

-   `points` 是一个包含所有顶点坐标的数组。
    
-   `cells` 是一个列表，每个元素是一个 `meshio CellBlock`，主要包含 `dim`（维度）、`type`（单元类型）和 `data`（该单元类型的节点索引数组）属性。适用于需要同时处理单元类型和节点索引的情况，特别是在遍历所有单元时。
    
-   `cells_dict` 与 `cells` 类似，但以字典的形式存储。键是单元类型，值是该单元类型的节点索引数组。适用于需要按单元类型访问或操作单元数据的情况，便于对特定类型的单元进行单独处理。
    

安装方法：

```
pip install meshio
```

多类型网格读取案例：

```
import meshiomesh = meshio.read('test.inp')print(f'Number of vertices:{mesh.points.shape[0]}')for cell in mesh.cells:    print(f'Type:{cell.type}, Number:{cell.data.shape[0]}')# Number of vertices:25653# Type:hexahedron20, Number:1900# Type:hexahedron, Number:1900# Type:tetra10, Number:8709# Type:tetra, Number:8701
```

> Github 主页：https://github.com/nschloe/meshio

### pyvista

**pyvista** 是非常强大的可视化库，也包含网格读取、保存和显示等功能（目前似乎不支持网格划分，只有体素化功能 `pv.Voxelize`）。**pyvista** 内置 **meshio** 的网格 IO 工具，可使用 `pyvista.read_meshio` 和 `pyvista.save_meshio` 进行网格的读取和导出。

**pyvista** 读取的网格信息可从 `cells_dict` 属性中获取。**pyvista** 的 `cells_dict` 与 **meshio** 的 `cells_dict` 格式基本一致，但单元类型是以类型编号的形式存储的，编号对照表在官网有说明，部分对照关系如下：

```
TRIANGLE = <CellType.TRIANGLE: 5> # 线性三角形单元QUAD = <CellType.QUAD: 9> # 线性四边形单元TETRA = <CellType.TETRA: 10> # 线性四面体单元VOXEL = <CellType.VOXEL: 11> # 线性体素单元HEXAHEDRON = <CellType.HEXAHEDRON: 12> # 线性六面体单元QUADRATIC_TRIANGLE = <CellType.QUADRATIC_TRIANGLE: 22> # 二次三角形单元QUADRATIC_QUAD = <CellType.QUADRATIC_QUAD: 23> # 二次四边形单元QUADRATIC_TETRA = <CellType.QUADRATIC_TETRA: 24> # 二次四面体单元QUADRATIC_HEXAHEDRON = <CellType.QUADRATIC_HEXAHEDRON: 25> # 二次六面体单元
```

安装方法（Python >= 3.9）：

```
pip install pyvista
```

读写和可视化案例：

```
import pyvista as pv# 读取inpgrid = pv.read_meshio('test.inp')# 显示网格信息for typeID,cell in grid.cells_dict.items():    print(f'Type:{typeID}, Number:{cell.shape[0]}')# Type:10, Number:8701# Type:12, Number:1900# Type:24, Number:8709# Type:25, Number:1900grid.plot(show_edges=True)# 保存inppv.save_meshio('out.inp', grid)
```


(二阶单元的显示似乎存在一些问题，左右其实是二阶四面体单元和二阶六面体单元，看上去像是将二阶单元拆解为一阶单元显示的)

> Github 主页：https://github.com/pyvista/pyvista
> 
> 官方案例（很好用）：https://docs.pyvista.org/examples/
> 
> 单元类型编号对照表：https://docs.pyvista.org/api/utilities/\_autosummary/pyvista.celltype#pyvista-celltype

### pygalmesh

**pygalmesh** 封装了 **CGAL** 的 2D 和 3D 网格生成功能，支持创建体网格、周期性体网格、表面网格等。

安装：windows 上安装时直接 pip 可能会有问题，参考 https://cloud.tencent.com/developer/ask/sof/108204512，使用 conda 安装：

```
conda install -c conda-forge pygalmesh
```

小问题：装完 **pygalmesh** 之后导入 **pyvista** 可能会报错，提示 `ImportError: initialization failed`，重新安装 **pyvista** 之后就可以了，`pip install pyvista --force-reinstall`。

案例：读取 `stl` 划分四面体网格并使用 **pyvista** 可视化网格（需要手动调整 `min_facet_angle`、 `max_radius_surface_delaunay_ball`、`max_facet_distance`、 `max_circumradius_edge_ratio` 等参数来得到理想的网格）

```
import pygalmeshimport pyvista as pvmesh = pygalmesh.generate_volume_mesh_from_surface_mesh(    "test.stl",    min_facet_angle=25.0,    max_radius_surface_delaunay_ball=1,    max_facet_distance=0.5,    max_circumradius_edge_ratio=1.3,    verbose=False,) # meshio对象mesh_pv = pv.wrap(mesh) # 使用wrap()函数封装为pyvista对象# 剖分可视化网格crinkled = mesh_pv.clip(normal=(1, 0, 0), crinkle=True) # 剖面p = pv.Plotter()p.add_mesh(crinkled, color='w', show_edges=True)stl_model = pv.read("test.stl") # 原始模型作为参照p.add_mesh(stl_model, color='w', opacity=0.2)p.add_mesh(stl_model.extract_feature_edges(), color='r')p.show()
```


> Github 主页：https://github.com/meshpro/pygalmesh

### pygmsh/gmsh

**gmsh** 是非常著名的开源网格划分工具，支持多种网格划分算法，**pygmsh** 封装了 **gmsh** 的 python API，使得使用更加方便（好吧感觉步骤还是比较繁琐）。

**gmsh**/**pygmsh** 一般通过 `gmsh.option.setNumber("xxx.xxx", x)` 的方式来进行网格划分的控制，如

-   `gmsh.option.setNumber("Mesh.ElementOrder", 1)` 表示划分一阶单元
    
-   `gmsh.option.setNumber("Mesh.Algorithm3D", 10)` 表示使用 HXT 算法划分三维网格
    
-   `gmsh.option.setNumber("General.NumThreads", threads)` 表示设置线程数（实际加速好像不明显）
    

目前支持的部分算法：

-   2D 网格划分算法 (1: MeshAdapt, 2: Automatic, 3: Initial mesh only, 5: Delaunay, 6: Frontal-Delaunay, 7: BAMG, 8: Frontal-Delaunay for Quads, 9: Packing of Parallelograms, 11: Quasi-structured Quad)
    
-   3D 网格划分算法 (1: Delaunay, 2: New Delaunay, 3: Initial mesh only, 4: Frontal, 5: Frontal Delaunay, 6: Frontal Hex, 7: MMG3D, 9: R-tree, 10: HXT)  - 目前只有 HXT 支持并行
    

安装：

```
pip install pygmsh
```

案例：读取 `stl` 并划分线性或二次四面体单元，指定全局网格尺寸，使用 **pyvista** 可视化。

```
import gmshfrom pygmsh.helpers import extract_to_meshioimport pyvista as pvdef generate_tetra(model, mesh_size, mesh_order=1, threads=2):    # 初始化    gmsh.initialize()    gmsh.option.setNumber("General.Terminal", 0) # 控制台信息输出 0:不输出 1:输出    gmsh.option.setNumber("General.NumThreads", threads) # 多线程 (加速效果不明显)    gmsh.clear()    if mesh_order == 1:        cell_type = pv.CellType.TETRA    elif mesh_order == 2:        cell_type = pv.CellType.QUADRATIC_TETRA    else:        raise ValueError('mesh_order must be 1 or 2')    # 加载STL模型    gmsh.merge(model)    # 识别面    gmsh.model.mesh.classifySurfaces(40 * 3.1415926 / 180.)    # 创建体    gmsh.model.mesh.createGeometry()    s = gmsh.model.getEntities(2)    l = gmsh.model.geo.addSurfaceLoop([e[1] for e in s])    gmsh.model.geo.addVolume([l])    gmsh.model.geo.synchronize()    # 利用背景网格的场数据指定全局网格尺寸    f = gmsh.model.mesh.field.add("MathEval")    gmsh.model.mesh.field.setString(f, "F", str(mesh_size))    gmsh.model.mesh.field.setAsBackgroundMesh(f)    # 指定网格阶次    gmsh.option.setNumber("Mesh.ElementOrder", mesh_order)    # 2D 网格划分算法 (1: MeshAdapt, 2: Automatic, 3: Initial mesh only, 5: Delaunay, 6: Frontal-Delaunay,     #               7: BAMG, 8: Frontal-Delaunay for Quads, 9: Packing of Parallelograms, 11: Quasi-structured Quad)    gmsh.option.setNumber("Mesh.Algorithm", 2)    # 3D 网格划分算法 (1: Delaunay, 2: New Delaunay, 3: Initial mesh only, 4: Frontal, 5: Frontal Delaunay,     #               6: Frontal Hex, 7: MMG3D, 9: R-tree, 10: HXT)  - 目前只有HXT支持并行    gmsh.option.setNumber("Mesh.Algorithm3D", 10)    # 划分网格    gmsh.model.mesh.generate(3)    # 转pyvista UnstructuredGrid    mesh = pv.wrap(extract_to_meshio())    gmsh.clear()    gmsh.finalize()    # 提取四面体 (完整的网格包含点、面、体单元)    mesh = mesh.extract_cells_by_type(cell_type)    # 二次四面体节点编号顺序修正    if cell_type == pv.CellType.QUADRATIC_TETRA:        mesh.cells = mesh.cells.reshape(-1, 11)[:, [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 9]].ravel()        mesh.cells_dict[24] = mesh.cells_dict[24][:, [0, 1, 2, 3, 4, 5, 6, 7, 9, 8]]    return meshmodel = 'test.stl'mesh = generate_tetra(model, mesh_size=2, mesh_order=1)# 剖分可视化网格crinkled = mesh.clip(normal=(1, 0, 0), crinkle=True) # 剖面p = pv.Plotter()p.add_mesh(crinkled, show_edges=True)stl_model = pv.read(model) # 原始模型作为参照p.add_mesh(stl_model, color='w', opacity=0.2)p.add_mesh(stl_model.extract_feature_edges(), color='r')p.remove_scalar_bar()p.show()
```


> 参数控制说明：https://gmsh.info/doc/texinfo/gmsh.html
> 
> 网格划分算法的选择：https://gmsh.info/doc/texinfo/gmsh.html#Specifying-mesh-element-sizes:~:text=%5D%5BIndex%5D-,1.2.1%20Choosing%20the%20right%20unstructured%20algorithm,-Gmsh%20provides%20a
> 
> 直接从 pv.PolyData 对象划分网格可以参考：https://github.com/pyvista/scikit-gmsh?tab=readme-ov-file

### tetgen

**tetgen** 是一个高质量的四面体网格划分工具，由斯杭博士开发，能够从三维空间中的点集或边界表面生成四面体网格。**tetgen** 与 **pyvista** 联动的比较好，**tetgen** 可直接将 `pv.PolyData` 封装成 **tetgen** 对象并划分网格，划分完成后也可直接提取得到 **pyvista** 的 `UnstructuredGrid` 对象并可视化，所以代码整体比较简洁。

安装:

```
pip install tetgen
```

案例：读取 `stl` 并划分四面体单元，使用 **pyvista** 可视化。

```
import tetgenimport pyvista as pvsphere = pv.read('test.stl')tet = tetgen.TetGen(sphere)tet.tetrahedralize(order=1, mindihedral=20, minratio=1.2)grid = tet.grid# 剖分可视化网格crinkled = grid.clip(normal=(1, 0, 0), crinkle=True) # 剖面p = pv.Plotter()p.add_mesh(crinkled, show_edges=True)stl_model = pv.read('test.stl') # 原始模型作为参照p.add_mesh(stl_model, color='w', opacity=0.2)p.add_mesh(stl_model.extract_feature_edges(), color='r')p.remove_scalar_bar()p.show()
```


> 官网：https://wias-berlin.de/software/index.jsp?id=TetGen&lang=1
> 
> 参数含义说明：https://tetgen.pyvista.org/api.html

### 其他

除以上工具外，还有很多 Python 可使用的开源网格划分工具，如 **Netgen**（四面体网格划分）、**MeshPy**（四面体网格划分）、**SALOME**（仿真软件，提供网格划分工具 SMESH）。

更多开源/商用网格工具可参考：https://www.robertschneiders.de/meshgeneration/software.html