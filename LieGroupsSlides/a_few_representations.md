---
marp: true
---

### A few related families of irreducible representations 

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calF}{{\cal F}}
\newcommand{\calP}{{\cal P}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$Let $\calP_m^\C(2)$ denote the vector space with basis $\ \{p_0, \ldots, p_m \}, \ {}$ where
$$ 
p_k \lp \begin{bmatrix}z_1\\ z_2\end{bmatrix} \rp := z_1^k z_2^{m−k} \qquad \forall \ z_1, z_2 \in \C.
$$
Define a representation of $SU(2)$ on $\calP_m^\C(2)$ by
$$
(A \cdot f)\lp \begin{bmatrix}z_1\\ z_2\end{bmatrix} \rp = f \lp A^{-1}\begin{bmatrix}z_1\\ z_2\end{bmatrix} \rp.
$$
We'll see that this is a family of irreducible representations, indexed by $m$. 
$~$
The spaces $V_m$ of homogeneous harmonic polynomials  of order $m$ on $\R^3$ are irreducible representations of $SO(3, \R). \ {}$ ($f$ is harmonic if $0 = \Delta f = \smallfrac{\partial^2 f}{\partial x^2} + \smallfrac{\partial^2 f}{\partial y^2} + \smallfrac{\partial^2 f}{\partial z^2}.\ {}$) Here
$$
(A \cdot f)(\xv) = f(A^{-1}\xv) \qquad \qquad \forall \ A \in SO(3, \R), \xv \in \R^3.
$$

---

$V_1 = \{ f(\xv) = \sum_{j = 1}^3 c_j x_j : c_j \in \R \}$,

$V_2 = \{ f(\xv) = c_1 x_2 x_3 + c_2 x_3 x_3 + c_3 x_1 x_2 + c_4 \lp x_1^2 - x_2^2 \rp + c_5  \lp x_2^2 - x_3^2 \rp  : c_j \in \R \}$

and so on. 
$~$
The restrictions of the elements of $V_m$ to the unit sphere $S^2$ are the spherical harmonics. 

Since $S^2$ is invariant under the usual action of $SO(3, \R)$ on $\R^3$, the spherical harmonics of order $m$ are also representations of $SO(3, \R)$.
$~$
$~$
$~$