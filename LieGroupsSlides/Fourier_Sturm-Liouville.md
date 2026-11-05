### Sturm–Liouville and representation theory relations

They connect most directly through symmetry: Sturm–Liouville operators often arise as differential operators that commute with a group action, and representation theory explains how their function spaces split into simpler invariant pieces. On each piece, the operator may reduce to a one-dimensional Sturm–Liouville problem.

A standard example is the Laplacian on the sphere. Rotations act on functions on the sphere, and the spherical harmonics form irreducible representations of the rotation group SO(3)
SO(3). Separating variables in the eigenvalue equation for the Laplacian produces the associated Legendre equation—a Sturm–Liouville problem. Its eigenfunctions and eigenvalues describe the spectral decomposition, while representation theory explains the rotational symmetry and the multiplicities of the eigenvalues.

Other familiar links include:

    Fourier series: the circle’s rotation group gives the modes einθeinθ, which are eigenfunctions of a Sturm–Liouville operator such as \(-d^2/d\theta^2
    Orthogonal polynomials: Legendre, Hermite, and Jacobi polynomials solve Sturm–Liouville equations; their recurrence and raising/lowering relations often reflect underlying Lie-algebra representations.
    Special functions on Lie groups: radial parts of invariant differential operators—such as a group’s Laplacian or Casimir operator—often become Sturm–Liouville operators after symmetry reduction.

In short, Sturm–Liouville theory supplies the spectral analysis of differential operators, while representation theory organizes that analysis by symmetry type. The connection is especially useful when a problem has a group action: decompose by representations first, then solve the smaller differential equations. Wikipedia
You said

Appropriate resources for a second year graduate course with students having no functional analysis or PDE background? They know what a Hilbert space is, and we're at the midpoint of a 10-week Lie groups course I'm teaching, heading into representation theory with an emphasis on representations of compact groups. I want to ground that in the fundamentals of Fourier analysis and a smidge of Sturm-Liouville, but only have time for a 1.5 hour lecture continuing roughly 0.5 hour today on Fourier and the heat equation (sep of variables). 
Duck.ai said

I’d make the circle the through-line: Fourier series are the S1
S1 case of decomposing a representation into irreducibles; the heat equation shows why that decomposition is useful; Sturm–Liouville is a brief bridge to other eigenfunction expansions. Avoid presenting general Fourier convergence or PDE theory—the course needs the organizing idea, not the machinery.
A 90-minute arc

First 30 minutes: Fourier series and the heat equation

    On S1S1, the irreducible complex representations are the characters einθeinθ, n∈Zn∈Z.
    Treat them as an orthogonal basis in L2(S1)L2(S1); give the coefficient formula and Parseval as the key “energy is preserved” statement.
    Solve ut=uθθut​=uθθ​ mode by mode: each Fourier mode evolves as e−n2teinθe−n2teinθ. Emphasize the picture: high frequencies decay faster, so heat smooths.
    If you’ve already done this part today, use it as the recap and spend the remaining hour on the connections below.

Next 60 minutes: symmetry, Sturm–Liouville, and compact groups

    20 min — Separation of variables on an interval: Use the heat equation with Dirichlet boundary conditions. The spatial equation is −X′′=λX−X′′=λX, X(0)=X(L)=0X(0)=X(L)=0, giving sine eigenfunctions and eigenvalues (nπ/L)2(nπ/L)2. Orthogonality gives Fourier sine coefficients; time evolution multiplies each coefficient by e−λnte−λn​t.
    10 min — The Sturm–Liouville takeaway: Show the general shape −(pX′)′+qX=λwX.−(pX′)′+qX=λwX. State, without proving, that suitable boundary conditions yield real eigenvalues and orthogonality in the weighted inner product ∫XmXnw dx∫Xm​Xn​wdx. Stress that this is the same pattern as Fourier expansion: eigenfunctions replace characters. The standard interval problem is a friendly special case. citeturn0search1
    20 min — Return to representations: For a compact group GG, let GG act on functions by translation. For S1S1, its irreducible pieces are the one-dimensional character spaces; for a nonabelian compact group, they are finite-dimensional representation spaces, and the corresponding “Fourier modes” are matrix coefficients. Peter–Weyl says these matrix coefficients give a complete orthogonal expansion in L2(G)L2(G). citeturn0search2turn0search5
    10 min — One teaser example: On the sphere, rotations commute with the Laplacian; spherical harmonics are its eigenspaces and also organize into SO(3)SO(3)-representations. Don’t derive the associated Legendre equation unless they already know it.

The conceptual slogan I’d put on the board is: Fourier analysis decomposes functions into symmetry types; differential operators that respect the symmetry act simply on those pieces. Heat flow then damps the pieces according to their eigenvalues. That gets you from today’s Fourier/heat calculation to compact-group representation theory without requiring a functional-analysis or PDE interlude.

For reading, Tao’s Peter–Weyl notes are a compact bridge from unitary representations to nonabelian Fourier analysis, though you may want to assign only the theorem statement and the circle comparison. Alain Robert, Introduction to the Representation Theory of Compact and Locally Compact Groups has a more systematic compact-group sequence, including Peter–Weyl, regular representations, and Fourier inversion; it’s better as instructor background or selective follow-up than as a short first reading. citeturn0search2turn0search6
You said

We've already done the first 50 minutes of your plan and the statement of Peter-Weyl. "same pattern" for Sturm-Liouville is too vague - how to briefly link that to representations? We don't need the Legendre equation. How to efficiently explain the family parametrized by R^3 for spherical harmonics vs parametrized by Z for Fourier? I know how to explain that purely in the context of needing functions defined on R^3 vs on the circle, but I'd like to place that "indexing" in the representation, matrix elements context.
Duck.ai said

The key distinction is which index is labeling the irreducible representation, and which index labels a basis vector inside it. For spherical harmonics, the family is not parametrized by R3
R3: R3
R3 is where you realize the functions as homogeneous harmonic polynomials. The representation-theoretic labels are ℓ=0,1,2,…
ℓ=0,1,2,…, and m=−ℓ,…,ℓ
m=−ℓ,…,ℓ labels a basis within the representation of dimension 2ℓ+1
2ℓ+1. citeturn0search1turn0search3

You could make the parallel explicit like this:

    Circle: S1=SO(2)S1=SO(2). Its irreducible representations are the characters einθeinθ, indexed by n∈Zn∈Z. Each is one-dimensional, so there is no extra basis index. Fourier series sums over those irreducibles.
    Sphere: S2=SO(3)/SO(2)S2=SO(3)/SO(2). The degree-ℓℓ spherical harmonics form one irreducible SO(3)SO(3)-representation, of dimension 2ℓ+12ℓ+1. Choose a basis YℓmYℓm​; the mm index runs over that basis. Functions on S2S2 decompose as a sum over ℓℓ, with 2ℓ+12ℓ+1 coefficients at each ℓℓ.

The homogeneous-space point explains why the sphere doesn’t give all matrix coefficients of SO(3)
SO(3). A function on S2
S2 is a function on SO(3)
SO(3) that is unchanged by rotations about the chosen axis—that is, it is right-SO(2)
SO(2)-invariant. In each SO(3)
SO(3) irrep, this selects the vectors fixed by that SO(2)
SO(2); for the usual degree-ℓ
ℓ irrep there is one such direction. The remaining 2ℓ+1
2ℓ+1 matrix coefficients give the Yℓm
Yℓm​. So Peter–Weyl’s general matrix-coefficient picture specializes to “one copy of each degree-ℓ
ℓ irrep, with its basis indexed by m
m.”

For the brief Sturm–Liouville connection, I’d say: the spherical Laplacian commutes with rotations, so each degree-ℓ
ℓ representation is preserved by it; in fact, it acts on that whole space by the scalar ℓ(ℓ+1)
ℓ(ℓ+1) (up to the sign convention for the Laplacian). Thus the spherical harmonics are simultaneously organized as representation spaces and as Laplacian eigenspaces. If you separate variables in the angles, the remaining equation for the polar-angle factor is a Sturm–Liouville problem. You needn’t derive it: the point is that Sturm–Liouville supplies the orthogonal eigenfunctions, while symmetry explains why the full eigenspaces come in these SO(3)
SO(3)-representation-sized packets. (On the circle, the analogous eigenvalue is n2
n2, and the complex eigenspaces einθ
einθ are the one-dimensional SO(2)
SO(2) irreps.)

A useful board summary is:
L2(S1)=⨁^n∈ZCeinθ,L2(S2)=⨁^ℓ≥0Hℓ,dim⁡Hℓ=2ℓ+1.
L2(S1)=⨁
​n∈Z​Ceinθ,L2(S2)=⨁
​ℓ≥0​Hℓ​,dimHℓ​=2ℓ+1.
Then annotate: n
n or ℓ
ℓ: irrep label; m
m: basis label within Hℓ
Hℓ​; x,y,z
x,y,z: coordinates used to realize Hℓ
Hℓ​, not representation labels.
You said

What I mean by indexed by R^3 is explained in the attached image

    Attached image 1

### Plane waves determine representations of $(\R^3, +)$

Each plane wave $ϕ_ξ(x) = e^{2πi⟨ξ, \xv⟩}$ is a basis vector for a one-dimensional irreducible representation (a character) of $(\R^3, +)$. 

*However*, $ϕ_ξ \not \in L^2(\R^3)$. 

The Fourier transform decomposes functions on $\R^3$ by this continuous family of irreducibles. 

The Laplacian acts on each character by the scalar −4π2∣ξ∣2
−4π2∣ξ∣2. Strictly, these plane waves are generalized eigenfunctions rather than elements of L2(R3)
L2(R3).

The sphere enters by sorting those same characters according to their behavior under rotations. Write ξ=ρω
ξ=ρω, with ρ≥0
ρ≥0 and ω∈S2
ω∈S2. The radial label ρ
ρ gives the Laplacian eigenvalue −4π2ρ2
−4π2ρ2; at fixed ρ
ρ, the directions ω
ω form a sphere on which SO(3)
SO(3) acts. Functions of ω
ω decompose into spherical harmonics:
L2(S2)≅⨁^ℓ≥0Hℓ,dim⁡Hℓ=2ℓ+1.
L2(S2)≅⨁
​ℓ≥0​Hℓ​,dimHℓ​=2ℓ+1.
Thus the continuous Fourier parameter ξ∈R3
ξ∈R3 can be reorganized as continuous radial frequency ρ
ρ plus discrete rotational type ℓ
ℓ, with m
m indexing a basis within that type. Spherical harmonics are matrix-coefficient data for the SO(3)
SO(3) action on the angular directions—not a replacement for the full R3
R3 frequency parameter. citeturn0search1turn0search4

That also gives a sharper Sturm–Liouville bridge: after decomposing by SO(3)
SO(3)-type ℓ
ℓ, the Euclidean Laplacian in polar coordinates becomes, on the radial factor,
ΔℓR=R′′+2rR′−ℓ(ℓ+1)r2R.
Δℓ​R=R′′+r2​R′−r2ℓ(ℓ+1)​R.
This radial differential operator is in Sturm–Liouville form after multiplying by the radial measure r2 dr
r2dr:
−(r2R′)′+ℓ(ℓ+1)R=λr2R.
−(r2R′)′+ℓ(ℓ+1)R=λr2R.
So the representation label ℓ
ℓ determines the angular contribution, and the remaining radial eigenfunction problem is Sturm–Liouville. You can state this without solving the radial equation. If you want to keep the lecture especially light, the punchline is simply: Fourier labels the irreducibles of translations by ξ
ξ; spherical harmonics label the rotational types inside each fixed-∣ξ∣
∣ξ∣ frequency sphere; Sturm–Liouville handles the leftover radial variable.
You said

This is what I was looking for! The text I'm largely following seems intended for readers with some basic knowledge of PDEs and functional analysis, so spherical harmonics serve as a 'large' example. For my students, spherical harmonics, Fourier analysis, etc are phrases they've heard, but not existing foundation to build on. I can go with what you just gave me, but if there's anything more that might help students organize the multiple levels (poor term) in the constructions - the this within that - that would be very helpful. I learned this from mechanical engineers, and my way of thinking/talking about it didn't seem to go over well today.
Duck.ai said

A useful way to organize it is to distinguish three questions that can otherwise get tangled:

    What symmetry are we decomposing by?
    What labels the pieces of that decomposition?
    What operator acts on each piece?

For this example, I’d draw a “zoom-in” diagram rather than introduce the whole construction at once:

functions on position space R3 →Fourier transform frequency space R3 →ξ=ρω radius ρ and direction ω∈S2 →spherical harmonics rotation types ℓ, basis labels m.
functions on position space R3​ Fourier transform
​ frequency space R3​ ξ=ρω
​ radius ρ and direction ω∈S2​ spherical harmonics
​ rotation types ℓ, basis labels m​.

Then talk through what each step means:

    Fourier transform: Translation symmetry gives plane waves e2πi⟨ξ,x⟩e2πi⟨ξ,x⟩. The vector ξ∈R3ξ∈R3 is the frequency label; it is not a spherical-harmonic label.
    Separate length from direction: Write ξ=ρωξ=ρω. The length ρρ is the frequency magnitude; the direction ωω lies on the unit sphere. Since the Laplacian acts on a plane wave by −4π2ρ2−4π2ρ2, it sees the length, not the direction.
    Decompose directions by rotations: At a fixed ρρ, rotations move ωω around S2S2. Spherical harmonics decompose angular dependence into irreducible SO(3)SO(3)-types ℓ=0,1,2,…ℓ=0,1,2,…. Within the degree-ℓℓ type, mm labels a basis; there are 2ℓ+12ℓ+1 basis elements.

So the labels have different jobs:
ρ⏟frequency sizeℓ⏟rotation typem⏟basis vector within that type.
frequency size
ρ​​rotation type
ℓ​​basis vector within that type
m​​.
The original Fourier label ξ
ξ packages the first two pieces as ξ=ρω
ξ=ρω; the spherical-harmonic expansion reorganizes the angular part ω
ω by rotational symmetry.

A mechanical-engineering analogy may help, but I’d make the distinctions explicit. Say “frequency magnitude” for ρ
ρ, “angular mode family” or “rotation type” for ℓ
ℓ, and “mode within that family” for m
m. “Mode” alone can be slippery: a plane wave indexed by ξ
ξ, a spherical-harmonic degree ℓ
ℓ, and an individual Yℓm
Yℓm​ can all be called modes in different contexts.

Then connect Sturm–Liouville as the next reduction, not as a competing expansion. After fixing an angular type ℓ
ℓ, the Laplacian acting on a separated function R(r)Yℓm(ω)
R(r)Yℓm​(ω) leaves the angular type alone and reduces to a radial differential operator on R(r)
R(r). That one-variable eigenfunction problem has Sturm–Liouville form. In plain language: first sort by rotational behavior; then solve the remaining radial problem. You can show the formula if useful, but the hierarchy is the main point:
translations⟶ξ;rotations⟶ℓ,m;radial differential operator⟶Sturm–Liouville.
translations⟶ξ;rotations⟶ℓ,m;radial differential operator⟶Sturm–Liouville.

One caution that may prevent a common misunderstanding: the plane waves are indexed by all ξ∈R3
ξ∈R3, while spherical harmonics describe functions of direction on S2
S2. They are not two rival ways to index the same objects. The second decomposition refines the angular part of the first.