---
marp: true
---

## Interlude: Fourier and harmonic analysis tidbits 

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\cv}{\mathbf{c}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\pv}{\mathbf{p}}
\newcommand{\vv}{\mathbf{v}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$The *heat equation* is a linear PDE of the form
$$
\smallfrac {\partial u}{\partial t} = \Delta u = \smallfrac {\partial^2 u}{\partial x_1 x_1} + \cdots \smallfrac {\partial^2 u}{\partial x_n x_n}
$$
where $u : R  \times I \to \R$ for some region $R$ and interval $I \subset \R$ containing $0$.

The *wave equation* has the form
$$
\smallfrac {\partial^2 u}{\partial t^2} = \Delta u.
$$
$~$
Solutions must satisfy given initial and boundary conditions 
$$
u(\xv, 0) = f(\xv), \qquad 
u|_{B_d} = b_d, \sands 
\smallfrac {\partial u}{\partial \nu}|_{B_n} = b_n  
$$
for given functions $\ f: R \to \R, \ b_d: B_d \times I \to \R, \ {}$ and $b_n: B_n \times I \to \R, \ {}$  where 
$$ B_d \cup B_n = \partial R.$$

---

### Separation of variables

The classical strategy for solving these linear PDEs involves 

1. Construction of a basis of solutions of the *evolution equation* (no initial and partial boundary conditions imposed) as products of functions of a single variable

2. Calculation of linear combinations of these special solutions that satisfy the initial and boundary conditions.

***Example. $R = S^1 \approx \R/\Z.\ {}$*** Substituting
$$
u(x, t) = X(x)T(t)
$$
for as yet unknown functions $\ X: R \to \R \ {}$ and $\ T: I \to \R \ {}$ into the heat equation yields
$$
X(x) T'(t) = X''(x) T(t).
$$
$~$
If we assume for the moment that $u$ is everywhere nonzero, we can divide by $u$, obtaining

---

$$
\frac {T'(t)}{T(t)} = \frac {X''(x)}{X(x)}.
$$
Since $x$ and $t$ are independent variables, this equation is satisfied on $R \times I \ \Longleftrightarrow$
$$
\frac {T'(t)}{T(t)} = \lambda = \frac {X''(x)}{X(x)}
$$
for some $\lambda \in \R$.

We need eigenfunctions $T$ of $\smallfrac {d \ }{dt}$ and $X$ of $\smallfrac {d^2 \ }{dx^2}$, both with the same eigenvalue. 
$~$
$$
X_k(x) = \cos (2 \pi \, k \, x)
\sands
\tilde X_k(x) = \sin (2 \pi \, k \, x)
$$
are eigenfunctions of $\smallfrac {d^2 \ }{dx^2}\ {}$ with eigenvalue $\ - 4 \pi^2 k^2 \ {}$ for any $k \in \Z$.
$$
T_k(t) = e^{- 4 \pi^2 k^2 \ t}
$$
is an eigenfunction of $\smallfrac {d \ }{dt}$ with the same eigenvalue. 

---

Linearity of the heat equation $\Longrightarrow$
$$
u(x, t) = a_0 + \sum_{k = 1}^n T_k(t) \lp a_k X_k(x) + \tilde a_k \tilde X_k(x) \rp
$$
is a solution of the heat equation for any $a_k, \tilde a_k \in \R$. (Here $X_0 = 1 = T_0$.)

Note that given the symmetries of $X_k$ and $\tilde X_k$, we don't gain any new solutions by considering terms with negative $k$. 
$~$
To determine coefficients $a_k$ and $\tilde a_k$ satisfying the initial condition 
$$
f(x) = u(x, 0) = a_0 + \sum_{k = 1}^n \lp a_k X_k(x) + \tilde a_k \tilde X_k(x) \rp,
$$
we exploit the fact that rescalings of $X_k$ and $\tilde X_k$ (keep the notation as is) form an orthonormal basis of the space of square integrable real-valued functions on $S^1$, 
with the $L_2$ inner product 

---

$$
\langle f_1, f_2 \rangle_{S^1} = \int_0^1 f_1(x) f_2(x)dx.
$$

Ignoring any technical issues with convergence of the infinite sum,
$$
f = \langle f, 1 \rangle_{S^1} + \sum_{k = 1}^\infty \lp \langle f, X_k\rangle_{S^1} X_k +  \langle f, \tilde X_k\rangle_{S^1} \tilde X_k \rp.
$$

$S^1$ has empty boundary, so there are no boundary conditions.
$~$
$$
u(x, t) = \langle f, 1 \rangle_{S^1} + \sum_{k = 1}^n T_k(t) \lp \langle f, X_k\rangle_{S^1} X_k(x) + \langle f, \tilde X_k\rangle_{S^1} \tilde X_k(x) \rp
$$
is the solution of the heat equation with initial condition $f$.
$~$
The wave equation is solved analogously, with appropriately modified $T_k$. 

---

If we work in the complex setting, with $S^1 = \{ z \in \C: |z| = 1 \}, \ {}$ we have
$$
f(z) = \sum_{k = - \infty}^∞ \hat f(k) z^k, \qquad \quad \text{where} \quad
\hat f(k) := 
%\langle f, \phi_n \rangle = 
\smallfrac 1 {2π} \int_0^{2π}f(e^{iθ} )e^{−i k θ} dθ
$$
is the *$k$-th Fourier coefficient of $f$*.

As we discussed on Tuesday $z\mapsto z^k$ spans a 1D subrepresentation of $\C$.
$~$
***In-class exercise:*** How can we find solutions of the nonhomogeneous PDE
$$
L(u) = r, \qquad\text{where} \qquad L(u) := \smallfrac {\partial u}{\partial t} - \Delta u,
$$
for some function $r: R \to \C$? 
$~$
*Hint:* Exploit linearity of $L$. Look for solutions $v$ and $w$ of two simpler equations, such that $u = v + w$ satisfies the given equation.

---

Separation of variables works in higher spatial dimensions as well. If
$$u(\xv, t) = X(\xv) T(t)
$$
for $T: I \to \R$ and $X: R \to \R$, then 
$$
\smallfrac {\partial u}{\partial t} = X (\xv) T'(t) 
\sands \Delta u  = \Delta X(\xv) T(t),
$$
so if $u$ satisfies the heat equation  and is everywhere nonzero, $X$ and $T$ must be eigenvectors of $\Delta$ and $\smallfrac {\partial \ }{\partial t}$ with a common eigenvalue.
$~$
Hence the eigenvectors and eigenvalues of the Laplacian on various domains have been intensively studied.
$~$
As usual when working with linear maps, the kernel (the eigenspace of 0) is of particular practical and conceptual interest.

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
$\hat f: \R^3 \to \C$ is the *Fourier transform* of $f$.

---

$\hat f(ξ)$ captures the extent to which $f$ oscillates at frequency $ξ$.
$~$
On the circle, the eigenvectors were indexed by $\Z$, and a harmonic function could be expressed as a limit of linear combinations of the eigenvectors. 

In the case at hand, the "indices" run over all elements of $\R^n$, and $f$ is expressed as an integral over those indices:
$$\eqa{
f(\xv) &= \langle \hat f, \phi_{-\xv} \rangle_{L_2}\\
&= \int_{\R^n} \hat f(\xi) \phi_{\xv}(\xi) d \xi \\
&= \int_{\R^n} \hat f(\xi) \phi_{\xi}(\xv) d \xi ,
}$$
since 
$$\phi_{\xv}(\xi) = e^{2πi \langle \xi, \xv \rangle} = \phi_{\xi}(\xv).
$$

---

### The Fourier transform of $∆f$ 

Sweeping a lot of analytical details under the rug, we have
$$\eqa{
∆f(\xv) &= ∆ \int_{\R^n} \hat f(\xi) \phi_{\xi}(\xv) d \xi \\
&=  \int_{\R^n} \hat f(\xi) ∆ \! \phi_{\xi}(\xv) d \xi \\
&=  \int_{\R^n} \lp - 4π^2 |\xi|^2\hat f(\xi) \rp \phi_{\xi}(\xv)  d \xi, 
}$$
and hence
$$
\widehat{∆f}(\xi) = - 4π^2 |\xi|^2\hat f(\xi).
$$
If we can efficiently compute and undo Fourier transforms, solving $∆f = w$ is "easy":
$$
∆f = w  \qquad \Longleftrightarrow \qquad \widehat{∆f} = \widehat w 
\qquad \Longleftrightarrow \qquad \hat{f}(\xi) = - \frac {\widehat w(\xi)}{4π^2 |\xi|^2} \quad \forall \ \xi \in \R^3.
$$ 

---

***Side remark:*** A *fast Fourier transform (FFT)* is an algorithm that computes the discrete Fourier transform (DFT) of a sequence, or its inverse (IDFT). 

A lot of data is discrete to start with, and continuous time (or other independent variable) dependent data is often discretized as part of the analysis process.

FFT's are *very* useful, and *very* widely used. 
Different versions have been optimized for various special (e.g. symmetric) situations. 
$~$
***Plancherel identity*** 
$$
\int_{\R^n} |f(\xv)|^2 d \xv = 
\int_{\R^n} |\hat f(\xi)|^2 d \xi.
$$

***Convolution formula*** 
$$
\int_{\R^n} f_1(\xv - \yv) f_2(\yv) d \yv = 
\int_{\R^n} \hat f_1(\xi) \hat f_2(\xi) \phi_\xi(\xv) d \xi.
$$

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
If we identify one of the coordinate planes in $\R^3$ with $\C$, then $\xv \mapsto (P \xv)^\ell$ is a harmonic homogeneous polynomial, where $P: \R^3 \to \C$ denotes projection onto the plane. 

For example, 
$$
(x + i \, y)^2 = x^2 - y^2 + 2 x y \, i = \langle (2 i, 0, 0, 1, 0) , \av_2(\xv) \rangle.
$$

---

### Spherical harmonics

The spherical harmonics can be defined as the restrictions of the harmonic homogeneous polynomials on $\R^3$ to $S^2$.

E.g., if $\tilde p$ denotes the expression of $p(x, y, z) = (x + i \, y)^\ell$ in terms of spherical coordinates $\ (r,\theta ,\varphi ), \ {}$ with $r = 1, \ {}$ then
$$
\tilde p(\theta ,\varphi) = \lp \sin \theta \cos \varphi + i \, \sin\theta \sin \varphi  \rp^\ell 
= \sin^\ell \theta e^{i\ell \varphi }.
$$
$~$
A separation of variables approach can be used to find the harmonic functions on $\R^3$ directly in spherical coordinates: 
If 
$$u(r, \theta, \varphi) = \rho(r) \sigma(\theta, \varphi),$$ 
then $\ \Delta u = 0 \ \Longleftrightarrow \ {}$
$\rho$ and $\sigma$ are eigenvectors of appropriate linear operators, with eigenvalues $\lambda$ and $- \lambda$.

---

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
\sin \theta {\frac {d\ }{d\theta }}\left(\sin \theta {\frac {d\Theta }{d\theta }}\right)= \lp m^{2} - \lambda \sin ^{2}\theta \rp \Theta.
$$
$~$
$~$
$~$
$~$
$~$
