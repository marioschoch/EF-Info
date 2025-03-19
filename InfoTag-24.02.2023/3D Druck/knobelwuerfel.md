#Knobelwürfel

![Knobelwürfel](docs/Images/Knobelwürfel.png)

```scad
union() {
    cube([3, 1, 1]);
    translate([1, 1, 0])
        cube([1, 1, 1]);
}

union() {
    translate([3, 2, 0])
        cube([2, 1, 1]);
    translate([3, 3, 0])
        cube([1, 1, 1]);
    translate([3, 2, 1])
        cube([1, 1, 1]);
}

union() {
    translate([6, 0, 0])
        cube([2, 1, 1]);
    translate([6, 1, 0])
        cube([1, 1, 1]);
    translate([6, 0, 1])
        cube([1, 1, 1]);
}

union() {
    translate([6, 3, 0])
        cube([3, 1, 1]);
    translate([6, 4, 0])
        cube([1, 1, 1]);
}

union() {
    translate([0, 3, 0])
        cube([2, 1, 1]);
    translate([0, 4, 0])
        cube([1, 1, 1]);
    translate([1, 3, 1])
        cube([1, 1, 1]);
}

union() {
    translate([2, 5, 0])
        cube([2, 1, 1]);
    translate([2, 6, 0])
        cube([1, 1, 1]);
}

union() {
    translate([5, 6, 0])
        cube([2, 1, 1]);
    translate([6, 7, 0])
        cube([2, 1, 1]);
}

```