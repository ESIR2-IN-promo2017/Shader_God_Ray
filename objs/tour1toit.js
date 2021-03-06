// Obj 2 atomicGL exporter 
// author: Remi COZOT - IRISA/University of Rennes 1
tour1toit=function(){
this.vertices =[
5.0152,9.3498,-0.12478, // vertice0
0.39681,9.3498,-0.39681, // vertice1
0.12478,9.3498,-0.12478, // vertice2
4.7432,9.3498,-0.39681, // vertice3
4.7432,9.3498,-2.682, // vertice4
5.0152,9.3498,-5.0152, // vertice5
4.7426,9.3498,-4.7354, // vertice6
2.57,9.3498,-4.7432, // vertice7
0.39681,9.3498,-4.7432, // vertice8
0.12478,9.3498,-5.0152, // vertice9
0.12478,9.3498,-0.12478, // vertice10
1.4834,9.95,-3.6566, // vertice11
0.12478,9.3498,-5.0152, // vertice12
1.4834,9.95,-1.4834, // vertice13
5.0152,9.3498,-0.12478, // vertice14
1.4834,9.95,-1.4834, // vertice15
0.12478,9.3498,-0.12478, // vertice16
3.6566,9.95,-1.4834, // vertice17
5.0152,9.3498,-0.12478, // vertice18
3.6566,9.95,-3.6566, // vertice19
3.6566,9.95,-1.4834, // vertice20
5.0152,9.3498,-5.0152, // vertice21
5.0152,9.3498,-5.0152, // vertice22
1.4834,9.95,-3.6566, // vertice23
3.6566,9.95,-3.6566, // vertice24
0.12478,9.3498,-5.0152, // vertice25
3.6566,9.95,-3.6566, // vertice26
1.4834,9.95,-3.6566, // vertice27
2.57,10.66,-2.57, // vertice28
2.57,10.66,-2.57, // vertice29
1.4834,9.95,-3.6566, // vertice30
1.4834,9.95,-1.4834, // vertice31
3.6566,9.95,-1.4834, // vertice32
2.57,10.66,-2.57, // vertice33
1.4834,9.95,-1.4834, // vertice34
3.6566,9.95,-3.6566, // vertice35
2.57,10.66,-2.57, // vertice36
3.6566,9.95,-1.4834 // vertice37
]
this.normals = [
0,1,0, // normal0
0,1,0, // normal1
0,1,0, // normal2
0,1,0, // normal3
0,1,0, // normal4
0,1,0, // normal5
0,1,0, // normal6
0,1,0, // normal7
0,1,0, // normal8
0,1,0, // normal9
-0.40412,0.91471,4.1216e-16, // normal10
-0.40412,0.91471,4.1216e-16, // normal11
-0.40412,0.91471,4.1216e-16, // normal12
-0.40412,0.91471,4.1216e-16, // normal13
-8.333e-16,0.91471,0.40412, // normal14
-8.333e-16,0.91471,0.40412, // normal15
-8.333e-16,0.91471,0.40412, // normal16
-8.333e-16,0.91471,0.40412, // normal17
0.40412,0.91471,4.9629e-16, // normal18
0.40412,0.91471,4.9629e-16, // normal19
0.40412,0.91471,4.9629e-16, // normal20
0.40412,0.91471,4.9629e-16, // normal21
-1.0268e-15,0.91471,-0.40412, // normal22
-1.0268e-15,0.91471,-0.40412, // normal23
-1.0268e-15,0.91471,-0.40412, // normal24
-1.0268e-15,0.91471,-0.40412, // normal25
-8.8918e-15,0.83713,-0.547, // normal26
-8.8918e-15,0.83713,-0.547, // normal27
-8.8918e-15,0.83713,-0.547, // normal28
-0.547,0.83713,3.343e-15, // normal29
-0.547,0.83713,3.343e-15, // normal30
-0.547,0.83713,3.343e-15, // normal31
-7.536e-15,0.83713,0.547, // normal32
-7.536e-15,0.83713,0.547, // normal33
-7.536e-15,0.83713,0.547, // normal34
0.547,0.83713,5.1737e-15, // normal35
0.547,0.83713,5.1737e-15, // normal36
0.547,0.83713,5.1737e-15 // normal37
]
this.uv = [
8.2271,0.2047, // uv0
0.65094,0.65094, // uv1
0.2047,0.2047, // uv2
7.7808,0.65094, // uv3
7.7808,4.3995, // uv4
8.2271,8.2271, // uv5
7.7798,7.7681, // uv6
4.2159,7.7808, // uv7
0.65094,7.7808, // uv8
0.2047,8.2271, // uv9
-0.2047,6.3854, // uv10
-5.9984,8.822, // uv11
-8.2271,6.3854, // uv12
-2.4334,8.822, // uv13
8.2271,6.3854, // uv14
2.4334,8.822, // uv15
0.2047,6.3854, // uv16
5.9984,8.822, // uv17
0.2047,-1.3272, // uv18
5.9984,1.1094, // uv19
2.4334,1.1094, // uv20
8.2271,-1.3272, // uv21
-8.2271,-1.3272, // uv22
-2.4334,1.1094, // uv23
-5.9984,1.1094, // uv24
-0.2047,-1.3272, // uv25
-5.9984,3.9068, // uv26
-2.4334,3.9068, // uv27
-4.2159,6.036, // uv28
-4.2159,13.0945, // uv29
-5.9984,10.9653, // uv30
-2.4334,10.9653, // uv31
5.9984,10.9653, // uv32
4.2159,13.0945, // uv33
2.4334,10.9653, // uv34
5.9984,3.9068, // uv35
4.2159,6.036, // uv36
2.4334,3.9068 // uv37
]
this.index=[
0,
1,
2,
1,
0,
3,
3,
0,
4,
5,
4,
0,
5,
6,
4,
5,
7,
6,
5,
8,
7,
9,
8,
5,
8,
9,
2,
10,
11,
12,
11,
10,
13,
14,
15,
16,
15,
14,
17,
18,
19,
20,
19,
18,
21,
22,
23,
24,
23,
22,
25,
26,
27,
28,
29,
30,
31,
32,
33,
34,
35,
36,
37,
8,
2,
1
]
}
