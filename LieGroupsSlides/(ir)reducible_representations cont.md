---
marp: true
paginate: true
---

### Continuing from Tuesday:
$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\cv}{\mathbf{c}}
\newcommand{\ev}{\mathbf{e}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\uv}{\mathbf{u}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\wv}{\mathbf{w}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Z}{\mathbb{Z}}
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
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$Given orthonormal bases ${\cal B} = \{ \vv_1, \ldots, \vv_n \} \ {}$ of $V$ and $\widetilde {\cal B}= \{ \wv_1, \ldots, \wv_k \} \ {}$ of $W$, fix indices $i$ and $j$, and set 
$$
\phi(\uv) :=  \langle \uv, \vv_i \rangle_V \wv_j. 
$$

For any $\ 1 \leq \ell \leq n\ {}$ and $\ 1 \leq m \leq k$,
$$\eqa{
\langle \wv_m, g \cdot (\phi(g^{-1} \cdot \vv_\ell)) \rangle_W 
&= \langle \wv_m, \langle g^{-1} \cdot \vv_\ell, \vv_i \rangle_V g \cdot \wv_j \rangle_W \\
&= \langle g^{-1} \cdot \vv_\ell, \vv_i \rangle_V  \ \langle g \cdot \wv_j, \wv_m \rangle_W \\
&= a_{i\ell}(g^{-1}) \tilde a_{mj}(g),
}
$$
where 
- $a_{\ell i}$ denotes the $\ell i$-th matrix coefficient of $\rho_V(g)$ w.r.t. ${\cal B}$ 
- $\tilde a_{jm}(g)$ denotes the $jm$-th matrix coefficient of $\rho_W(g)$ w.r.t. $\widetilde {\cal B}$.

--- 

Hence, since $V$ is unitary,
$$\eqa{
\langle \wv_m, \Phi(\vv_\ell) \rangle_W &= \int_G a_{i \ell }(g^{-1}) \tilde a_{mj}(g) dg\\
&= \int_G \overline {a_{\ell i}(g)} \tilde a_{mj}(g) dg.}
$$
$~$
We can construct a $G$-invariant $L_2$ Hermitian inner product on the space of smooth complex-valued functions on a compact Lie group $G$.
$$
\langle f_1, f_2 \rangle_{L_2} := \int_G f_1(g) \overline{f_2(g)} dg,
$$
where $dg$ is the Haar measure on $G$. 

$$
\langle \wv_m, \Phi(\vv_\ell) \rangle_W = \langle a_{\ell i}, \tilde a_{jm} \rangle_{L_2}.
$$

---

In particular, if $V$ and $W$ aren't isomorphic, then $a_{\ell i}$ and $\tilde a_{mj}$ are orthogonal. 
$~$

***Claim:*** If $V$ is irreducible, then the matrix coefficients of $V$ w.r.t. ${\cal B}$ satisfy
$$
\langle a_{ij}, a_{k \ell} \rangle_{L_2} =  \frac {δ_{ik}δ_{j\ell}} {\dim V}.
$$
$~$
*Verify.* Let $E_{ik} : V → V$ denote the $k$i-th matrix unit, i.e.
$$
E_{ik}(\vv_j) = \delta_{jk} \vv_i,
$$
and apply the previous result to obtain
$$ 
\sum_{j, \ell} E_{jl} \int_G  ρ^V_{\ell i}(g)\overline{ρ^V_{jk}(g)} dg = \frac {\text{trace} \ E_{ik}}{\dim V} \, \text{id}_V
= \frac {\delta_{ik}}{\dim V} \, \text{id}_V.
$$

---

### A few related families of irreducible representations 

Let $\calP_m^\C(2)$ denote the vector space with basis $\ \{p_0, \ldots, p_m \}, \ {}$ where
$$ 
p_k \lp \begin{bmatrix}z_1\\ z_2\end{bmatrix} \rp := z_1^k z_2^{m−k} \qquad \forall \ z_1, z_2 \in \C.
$$
$~$
Define a representation of $SU(2)$ on $\calP_m^\C(2)$ by
$$
(A \cdot f)\lp \begin{bmatrix}z_1\\ z_2\end{bmatrix} \rp = f \lp A^{-1}\begin{bmatrix}z_1\\ z_2\end{bmatrix} \rp.
$$
$~$
We'll see that this is a family of irreducible representations, indexed by $m$. 
$~$
$~$
$~$
$~$

---

Recall: $f: \R^n \to \R$ is harmonic if 
$$0 = \Delta f = \sum_{j = 1}^n \smallfrac{\partial^2 f}{\partial {x_j}^2}.$$ 

The spaces $V_m$ of homogeneous harmonic polynomials  of order $m$ on $\R^3$ are irreducible representations of $SO(3, \R), \ {}$ where
$$
(A \cdot f)(\xv) = f(A^{-1}\xv) \qquad \qquad \forall \ A \in SO(3, \R), \xv \in \R^3.
$$

We have
$${\textstyle V_1 = \{ f(\xv) = \sum_{j = 1}^3 c_j x_j : c_j \in \R \}},$$

$$V_2 = \{ f(\xv) = c_1 x_2 x_3 + c_2 x_3 x_3 + c_3 x_1 x_2 + c_4 \lp x_1^2 - x_2^2 \rp + c_5  \lp x_2^2 - x_3^2 \rp  : c_j \in \R \}$$

and so on. 

---

The restrictions of the elements of $V_m$ to the unit sphere $S^2$ are the spherical harmonics. 
$~$
Since $S^2$ is invariant under the usual action of $SO(3, \R)$ on $\R^3$, the spherical harmonics of order $m$ are also representations of $SO(3, \R)$.
$~$
$~$
$~$
$~$
$~$
$~$

---

### Interlude: Fourier and harmonic analysis lighting tour/review

The *heat equation* is a linear PDE of the form
$$
\frac {\partial u}{\partial t} = \Delta u = \frac {\partial^2 u}{\partial x_1 x_1} + \cdots \frac {\partial^2 u}{\partial x_n x_n}
$$
where $u : R  \times I \to \R$ for some region $R$ and interval $I \subset \R$ containing $0$.

The *wave equation* has the form
$$
\frac {\partial^2 u}{\partial t^2} = \Delta u.
$$
$~$
We construct of a basis of solutions as products of functions of the spatial variable(s) and functions of time.

---

***Initial and boundary data***

 If $\partial R = B_d \cup B_n$, a solution  $u$ of the heat equation is determined by functions 
 - $\ f: R \to \R \qquad{}$ (initial data), 
 - $\ b_d: B_d \times I \to \R \qquad  {}$  (Dirichlet boundary data), and 
 - $\ b_n: B_n \times I \to \R, \qquad {}$ (Neumann boundary data)
 
via the conditions
$$
u(\xv, 0) = f(\xv), \qquad 
u|_{B_d} = b_d, \sands 
\smallfrac {\partial u}{\partial \nu}|_{B_n} = b_n. 
$$
$~$
We determine convergent linear combinations of the special solutions satisfying the initial and boundary conditions.

In practice, we typically approximate solutions using finite sums.

---

***Example. $R = S^1 \approx \R/\Z.\ {}$***

Substituting
$$
u(x, t) = X(x)T(t)
$$
for as yet unknown functions $\ X: R \to \R \ {}$ and $\ T: I \to \R \ {}$ into the heat equation yields
$$
X(x) T'(t) = X''(x) T(t).
$$

If we assume for the moment that $u$ is everywhere nonzero, we can divide by $u$, obtaining
$$
\frac {T'(t)}{T(t)} = \frac {X''(x)}{X(x)}.
$$
$x$ and $t$ are independent variables, so this equation is satisfied on $R \times I \ \Longleftrightarrow \ \exists \ \lambda \ {}$ s.t.
$$
\frac {T'(t)}{T(t)} = \lambda = \frac {X''(x)}{X(x)}.
$$

---

We need eigenvectors $T$ of $\smallfrac {d \ }{dt}$ and $X$ of $\smallfrac {d^2 \ }{dx^2}$, both with the same eigenvalue. 
$~$
$$
X_k(x) = \cos (2 \pi \, k \, x), \qquad \tilde X_k(x) = \sin (2 \pi \, k \, x),
\sands
T_k(t) = e^{- 4 \pi^2 k^2 \ t} \phantom{X_{\int_\int}}
$$
are eigenvectors of $\smallfrac {d^2 \ }{dx^2}\ {}$ or $\smallfrac {d \ }{dt}\ {}$ with common eigenvalue $\ - 4 \pi^2 k^2 \quad \ \forall \ k \in \Z$.

$~$

Linearity of the heat equation $\Longrightarrow$
$$
u(x, t) = a_0 + \sum_{k = 1}^n T_k(t) \lp a_k X_k(x) + \tilde a_k \tilde X_k(x) \rp
$$
is a solution of the heat equation for any $a_k, \tilde a_k \in \R$. 

---

To determine coefficients $a_k$ and $\tilde a_k$ satisfying the initial condition 
$$
f(x) = u(x, 0) = a_0 + \sum_{k = 1}^n \lp a_k X_k(x) + \tilde a_k \tilde X_k(x) \rp,
$$
we exploit the fact that rescalings of $X_k$ and $\tilde X_k$ (keep the notation as is) form an orthonormal basis of the space of square integrable real-valued functions on $S^1$, 
with the $L_2$ inner product 

$$
\langle f_1, f_2 \rangle_{S^1} = \int_0^1 f_1(x) f_2(x)dx.
$$

Ignoring any technical issues with convergence of the infinite sum,
$$
f = \langle f, 1 \rangle_{S^1} + \sum_{k = 1}^\infty \lp \langle f, X_k\rangle_{S^1} X_k +  \langle f, \tilde X_k\rangle_{S^1} \tilde X_k \rp.
$$

---

$S^1$ has empty boundary, so there are no boundary conditions.

$$
u(x, t) = \langle f, 1 \rangle_{S^1} + \sum_{k = 1}^n T_k(t) \lp \langle f, X_k\rangle_{S^1} X_k(x) + \langle f, \tilde X_k\rangle_{S^1} \tilde X_k(x) \rp
$$
is the solution of the heat equation with initial condition $f$.
$~$
The wave equation is solved analogously, with appropriately modified $T_k$. 
$~$

If we work in the complex setting, with $S^1 = \{ z \in \C: |z| = 1 \}, \ {}$ we have
$$
f(z) = \sum_{k = - \infty}^∞ \hat f(k) z^k, \qquad \quad \text{where} \quad
\hat f(k) := 
%\langle f, \phi_n \rangle = 
\smallfrac 1 {2π} \int_0^{2π}f(e^{iθ} )e^{−i k θ} dθ
$$
is the *$k$-th Fourier coefficient of $f$*.

---

Separation of variables works analogously in higher spatial dimensions. 
$$u(\xv, t) = X(\xv) T(t)
$$
for $T: I \to \R$ and $X: R \to \R \qquad \Longrightarrow$
$$
\smallfrac {\partial u}{\partial t} = X (\xv) T'(t) 
\sands \Delta u  = \Delta X(\xv) T(t),\phantom{X^\int_\int}
$$
so if $u$ satisfies the heat equation  and is everywhere nonzero, $X$ and $T$ must be eigenvectors of $\Delta$ and $\smallfrac {\partial \ }{\partial t}$ with a common eigenvalue.
$~$
Hence the eigenvectors and eigenvalues of the Laplacian have been intensively studied.

The kernel of a linear transformation is of particular interest and practical value. 

Functions in the kernel of the Laplacian are called *harmonic functions*.

---

### Plane waves 

Given $\xi \in \R^n$, define $\phi_\xi : \R^n \to \C$ by
$$
\phi_\xi(\xv) := e^{2πi \langle \xi, \xv \rangle}.
$$
Any (complex) scalar multiple of $\phi_\xi$ is called a *plane wave*.
$~$
$$\Delta \phi_\xi = - 4π^2 |\xi|^2 \phi_\xi,$$
so $\phi_\xi$ is an eigenvector of $\Delta$, with eigenvalue $- 4π^2 |\xi|^2$. 
$~$
For functions $f: \R^n \to \R$ that decay sufficiently rapidly, the following integrals are finite and we can define
$$
\hat f(\xi) := \langle f, \phi_\xi \rangle_{L_2} = \int_{\R^n} f(\xv) \phi_{-\xi}(\xv) d \xv.
$$

---

$\hat f: \R^3 \to \C$ is the *Fourier transform* of $f$.

$\hat f(ξ)$ captures the extent to which $f$ oscillates at frequency $ξ$.
$~$
On the circle, the eigenvectors were indexed by $\Z$, and a harmonic function could be expressed as a limit of linear combinations of the eigenvectors. 

In the case at hand, the "indices" run over all elements of $\R^n$, and $f$ is expressed as an integral over those indices:
$$\eqa{
f(\xv) &= \langle \hat f, \phi_{-\xv} \rangle_{L_2}\\
&= \int_{\R^n} \hat f(\xi) \phi_{\xv}(\xi) d \xi \\
&= \int_{\R^n} \hat f(\xi) \phi_{\xi}(\xv) d \xi ,
}$$

---

since 
$$\phi_{\xv}(\xi) = e^{2πi \langle \xi, \xv \rangle} = \phi_{\xi}(\xv).
$$
$~$
***The Fourier transform of $∆f$***

Sweeping a lot of analytical details under the rug, we have
$$\eqa{
∆f(\xv) &= ∆ \int_{\R^n} \hat f(\xi) \phi_{\xi}(\xv) d \xi \\
&=  \int_{\R^n} \hat f(\xi) ∆ \! \phi_{\xi}(\xv) d \xi \\
&=  \int_{\R^n} \lp - 4π^2 |\xi|^2\hat f(\xi) \rp \phi_{\xi}(\xv)  d \xi, 
}$$
and hence

---

$$
\widehat{∆f}(\xi) = - 4π^2 |\xi|^2\hat f(\xi).
$$
$~$
If we can efficiently compute and undo Fourier transforms, solving $∆f = w$ is "easy":
$$
∆f = w  \quad \Longleftrightarrow \quad \widehat{∆f} = \widehat w 
\quad \Longleftrightarrow \quad \hat{f}(\xi) = - \frac {\widehat w(\xi)}{4π^2 |\xi|^2} \qquad \qquad \forall \ \xi \in \R^3.
$$ 

$~$
***Side remark:*** A *fast Fourier transform (FFT)* is an algorithm that computes the discrete Fourier transform (DFT) of a sequence, or its inverse (IDFT). 

A lot of data is discrete to start with, and continuous time (or other independent variable) dependent data is often discretized as part of the analysis process.

FFT's are *very* useful, and *very* widely used. 

---

***Plancherel identity*** 
$$
\int_{\R^n} |f(\xv)|^2 d \xv = 
\int_{\R^n} |\hat f(\xi)|^2 d \xi.
$$
$~$
***Convolution formula*** 
$$
\int_{\R^n} f_1(\xv - \yv) f_2(\yv) d \yv = 
\int_{\R^n} \hat f_1(\xi) \hat f_2(\xi) \phi_\xi(\xv) d \xi.
$$
$~$
$~$
$~$
$~$

---

### Harmonic homogeneous polynomials 

A polynomial $\ p:\R^n \to \C \ {}$ is *homogeneous of degree* $\ell$  if
$$
p(\lambda \mathbf {x} )=\lambda^\ell p(\xv) \qquad \quad \forall \lambda \in \R, \xv \in \R^3.
$$

For $n = 3$ and $\ell \in \N,$ let $A_\ell$ denote the harmonic homogeneous polynomials of degree $\ell$. 
 - $A_1 = \{ p(\xv) = \langle \cv, \xv \rangle : \cv \in \C^3 \},  {}$ the space of linear functions on $\R^3$.
 
 - $A_2 = \{ p(\xv) = \langle \cv, \av_2(\xv) \rangle : \cv \in \C^5 \},  {}$ where $\av_2: \R^3 \to \R^5$ is given by
$$
\av_2(x, y, z) := \lp x y, x z, y z, x^2 - y^2, x^2 - z^2 \rp.
$$
$~$
If we identify one of the coordinate planes in $\R^3$ with $\C$, then $\xv \mapsto (P \xv)^\ell$ is a harmonic homogeneous polynomial, where $P: \R^3 \to \C$ denotes projection onto the plane. 

---

For example, 
$$
(x + i \, y)^2 = x^2 - y^2 + 2 x y \, i = \langle (2 i, 0, 0, 1, 0) , \av_2(\xv) \rangle.
$$
$~$
### Spherical harmonics

The spherical harmonics can be defined as the restrictions of the harmonic homogeneous polynomials on $\R^3$ to $S^2$.

E.g., if $\tilde p$ denotes the expression of $p(x, y, z) = (x + i \, y)^\ell$ in terms of spherical coordinates $\ (r,\theta ,\varphi ), \ {}$ with $r = 1, \ {}$ then
$$\eqa{
\tilde p(\theta ,\varphi) &= \lp \sin \theta \cos \varphi + i \, \sin\theta \sin \varphi  \rp^\ell \\
&= \sin^\ell \theta e^{i\ell \varphi }.}
$$

---

A separation of variables approach can be used to find the harmonic functions on $\R^3$ directly in spherical coordinates: If
$$u(r, \theta, \varphi) = \rho(r) \sigma(\theta, \varphi),$$ 
then $\ \Delta u = 0 \ \Longleftrightarrow \ {}$
$\rho$ and $\sigma$ are eigenvectors of appropriate linear operators, with eigenvalues $\lambda$ and $- \lambda$.

A second separation of variables 
$$
\sigma(\theta, \varphi) = \Theta(\theta) \Phi(\varphi)
$$
leads to 
$$
\sigma_{\lambda, m}(\theta, \varphi) = e^{i m  \varphi} \, \Theta_{\lambda, m}(\theta) 
$$
for $\ m \in \Z\ {}$ and $\ \Theta_{\lambda, m}\ {}$ satisfying
$$
\textstyle{\sin \theta {\frac {d\ }{d\theta }}\left(\sin \theta {\frac {d\Theta }{d\theta }}\right)= \lp m^{2} - \lambda \sin ^{2}\theta \rp \Theta.}
$$

---

### Regular representations and functions

The action of $G$ on $L_2(G)\ {}$ by 
$$
(g \cdot f)(h) = f(g^{-1} h) 
$$
is called the *regular representation*.
$~$
A *representative function* $f \in L_2(G)\ {}$ is a uniformly continuous function such that the
subspace 
$$
\text{span} (G\cdot f) = \text{span} \{ g \cdot f : g \in G \}
$$
is finite-dimensional.
$~$
***Claim*** *(without proof here)*: Any representative function is a linear combination of matrix elements of a finite dimensional representation.

---

### The Peter-Weyl Theorem

If $G$ is a compact Lie group, then
1. The representative functions are dense in $L_2(G)$.
2. $L_2(G)$ decomposes into a Hilbert space direct sum of irreducible representations of $G$, each of which is finite dimensional.
3. Every irreducible representation of $G$ is finite dimensional.
4. Each irreducible representation of $G$ occurs in $L_2(G)$ with multiplicity equal to its dimension.
5. Any unitary representation of $G$ on a separable Hilbert space decomposes into a Hilbert space direct sum of (finite dimensional} irreducible representations.
$~$

---

We won't cover the proof of the Peter-Weyl Theorem in this class. (See, e.g., Sternberg.)
$~$
The proof combines the representation theory that we’ve developed so far with functional analysis, particularly properties of compact operators on Hilbert spaces.
$~$
A *compact operator* on a Hilbert space $V$ is a bounded operator such that the image of a bounded set is *relatively compact*, i.e. has compact closure.
$~$

Compact operators form the closure with respect to the operator norm of the space of finite rank operators.
$~$
$~$
$~$
$~$

---

Many results for linear transformations of finite dimensional vector spaces carry over 
(with some technical finesse in the proofs) to compact operators on Hilbert spaces.

$~$
For example, the ***spectral theorem***: If $T$ is a compact, self-adjoint operator on a Hilbert space $V$, then $V$ has an orthogonal eigenbasis for $T$. 
If the orthogonal complement to $\ \ker(T) \ {}$ is infinite dimensional, the eigenvalues $\lambda_n$ of $T$ can be ordered so as to satisfy 
$$\ \lim_{n \to \infty} \lambda_n = 0.
$$
$~$
$~$
$~$
$~$
$~$
$~$
$~$

---




