<!--
## More about irreducible representations

Given orthonormal bases ${\cal B} = \{ \vv_1, \ldots, \vv_n \} \ {}$ of $V$ and $\widetilde {\cal B}= \{ \wv_1, \ldots, \wv_k \} \ {}$ of $W$, fix indices $i$ and $j$, and set 
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


***Claim:*** If $V$ is irreducible, then the matrix coefficients of $V$ w.r.t. ${\cal B}$ satisfy
$$
\langle a_{ij}, a_{k \ell} \rangle_{L_2} =  \frac {δ_{ik}δ_{j\ell}} {\dim V}.
$$

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

Define a representation of $SU(2)$ on $\calP_m^\C(2)$ by
$$
(A \cdot f)\lp \begin{bmatrix}z_1\\ z_2\end{bmatrix} \rp = f \lp A^{-1}\begin{bmatrix}z_1\\ z_2\end{bmatrix} \rp.
$$

We'll see that this is a family of irreducible representations, indexed by $m$. 

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

Since $S^2$ is invariant under the usual action of $SO(3, \R)$ on $\R^3$, the spherical harmonics of order $m$ are also representations of $SO(3, \R)$.

---
-->

### Interlude: Fourier and harmonic analysis lighting tour/review

The *heat equation* is a linear second order PDE of the form
$$
\frac {\partial u}{\partial t} = \Delta u = \frac {\partial^2 u}{\partial x_1 x_1} + \cdots \frac {\partial^2 u}{\partial x_n x_n}
$$
where $u : R  \times I \to \R$ for some region $R$ and interval $I \subset \R$ containing $0$.
<Spacer size="2px"/>

***Initial and boundary data:*** If $\partial R = B_d \cup B_n$, a solution  $u$ of the heat equation is determined by functions 
 - $\ f: R \to \R \qquad{}$ (initial data), 

 - $\ b_d: B_d \times I \to \R \qquad  {}$  (Dirichlet boundary data), and 

 - $\ b_n: B_n \times I \to \R, \qquad {}$ (Neumann boundary data)
 
via the conditions
$$
u(\xv, 0) = f(\xv), \qquad 
u|_{B_d} = b_d, \sands 
\smallfrac {\partial u}{\partial \nu}|_{B_n} = b_n. 
$$

<!--
The *wave equation* is a linear second order PDE of the form
$$
\frac {\partial^2 u}{\partial t^2} = \Delta u.
$$
<Spacer size="5px"/>
-->


---

### Fundamental solutions of the wave equation

We can construct bases of solutions as products of functions of the spatial variable(s) and functions of time.

We determine convergent linear combinations of these special solutions satisfying the initial and boundary conditions.
(In practice, we typically approximate solutions using finite sums.)
<Spacer size="1px"/>

***Example. $R = S^1 \approx \R/\Z.\ {}$***

Substituting
$$
u(x, t) = X(x)T(t)
$$
for as yet unknown functions $\ X: I_x \to \R \ {}$ and $\ T: I_t \to \R \ {}$ into the heat equation yields
$$
X(x) T'(t) = X''(x) T(t).
$$

If we assume for the moment that $u$ is everywhere nonzero, we can divide by $u$, obtaining
$$
\frac {T'(t)}{T(t)} = \frac {X''(x)}{X(x)}.
$$

---

#### Second slide of fundamental solutions of the wave equation

$x$ and $t$ are independent variables, so this equation is satisfied on $I_x \times I_t \ \Longleftrightarrow \ \exists \ \lambda \ {}$ satisfying
$$
\textstyle \frac {T'(t)}{T(t)} = \lambda = \frac {X''(x)}{X(x)}.
$$

$\Longrightarrow \ \ {}$ We need eigenvectors $T$ of $\smallfrac {d \ }{dt}$ and $X$ of $\smallfrac {d^2 \ }{dx^2}$, both with the same eigenvalue. 

$$
X_k(x) = \cos (2 \pi \, k \, x), \qquad \tilde X_k(x) = \sin (2 \pi \, k \, x),
\sands
T_k(t) = e^{- 4 \pi^2 k^2 \ t} \phantom{X_{\int_\int}}
$$
are eigenvectors of $\smallfrac {d^2 \ }{dx^2}\ {}$ or $\smallfrac {d \ }{dt}\ {}$ with common eigenvalue $\ - 4 \pi^2 k^2 \quad \ \forall \ k \in \Z$.
<Spacer size="1px"/>

Linearity of the heat equation $\Longrightarrow$
$$
u(x, t) = a_0 + \sum_{k = 1}^n T_k(t) \lp a_k X_k(x) + \tilde a_k \tilde X_k(x) \rp
$$
is a solution of the heat equation for any $a_k, \tilde a_k \in \R$. 

---

#### Heat equation continued: satisfying initial conditions
<Spacer size = "5px"/>

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

$S^1$ has empty boundary, so there are no boundary conditions.

---

#### Second slide about initial conditions
<Spacer size = "5px"/>

$$
u(x, t) = \langle f, 1 \rangle_{S^1} + \textstyle{\sum_{k = 1}^n} T_k(t) \lp \langle f, X_k\rangle_{S^1} X_k(x) + \langle f, \tilde X_k\rangle_{S^1} \tilde X_k(x) \rp
$$
is the solution of the heat equation with initial condition $f$.

The wave equation is solved analogously, with appropriately modified $T_k$. 
<Spacer size = "5px"/>

If we work in the complex setting, with $S^1 = \{ z \in \C: |z| = 1 \}, \ {}$ we have
$$
f(z) = \textstyle{\sum_{k = - \infty}^∞} \hat f(k) z^k,
$$
where
$$
% \qquad \quad \text{where} \quad
\hat f(k) := \langle f, X_k \rangle_{S^1}
%\langle f, \phi_n \rangle = 
= \smallfrac 1 {2π} \int_0^{2π}f(e^{iθ} )e^{−i k θ} dθ
$$
is the *$k$-th Fourier coefficient of $f$*.

---

### The heat equation in higher spatial dimensions

Separation of variables works analogously in higher spatial dimensions. 
$$u(\xv, t) = X(\xv) T(t)
$$
for $T: I \to \R$ and $X: R \to \R \qquad \Longrightarrow$
$$
\smallfrac {\partial u}{\partial t} = X (\xv) T'(t) 
\sands \Delta u  = \Delta X(\xv) T(t),\phantom{X^\int_\int}
$$
so if $u$ satisfies the heat equation  and is everywhere nonzero, $X$ and $T$ must be eigenvectors of $\Delta$ and $\smallfrac {\partial \ }{\partial t}$ with a common eigenvalue.
<Spacer size = "5px"/>

The eigenvectors and eigenvalues of the Laplacian have been intensively studied, in large part because of their role in the analysis of PDEs.
<Spacer size = "5px"/>

The kernel of a linear transformation is of particular interest and practical value. 

Functions in the kernel of the Laplacian are called *harmonic functions*.

---

### Equivariance of the Laplacian with respect to the induced action of the Euclidean group

$U\in O(n)$ acts on functions by
$$
(U \cdot f)(\xv)=f(U^{-1} \xv) = f(U^T \xv).
$$
Letting $D^2 f(\xv)$ denote the Hessian of $f$ at $\xv$, the Chain Rule $\ \ \Longrightarrow$
$$
D^2(U \cdot f)(\xv)=U\,D^2f(U^T \xv)\,U^T.
$$
Since the Laplacian is the trace of the Hessian, 
$$
\eqa{
\Delta(U \cdot f)(x)
&=\operatorname{tr}\!\lp U \, D^2f(U^T \xv) U^T\rp\\
&=\operatorname{tr}\!\lp D^2f(U^T \xv)\rp\\
&=(U \cdot \Delta f)(\xv).
}
$$
<Spacer size = "5px"/>

*Informal exercise:* The Laplacian is equivariant with respect to the induced actions of translations.

---

### Plane waves and Fourier transforms 

Given $\xiv \in \R^n$, define $\phi_\xiv : \R^n \to \C$ by
$$
\phi_\xiv(\xv) := e^{2πi \langle \xiv, \xv \rangle}.
$$

$\phi_\xiv$ is an eigenvector of $\Delta$, with eigenvalue $- 4π^2 |\xiv|^2$. 

Any (complex) scalar multiple of $\phi_\xiv$ is called a *plane wave*.
<Spacer size = "5px"/>

For functions $f: \R^n \to \R$ that decay sufficiently rapidly, the following integrals are finite and we can define
$$
\hat f(\xiv) := %\langle f, \phi_\xiv \rangle_{L_2(\R^n)} 
\int_{\R^n} f(\xv) \phi_{-\xiv}(\xv) d \xv.
$$
<Spacer size = "1px"/>

$\hat f: \R^3 \to \C$ is the *Fourier transform* of $f$.

$\hat f(\xiv)$ captures the extent to which $f$ oscillates at frequency $\xiv$.

---

### A few identities for Fourier transforms 

***Plancherel identity*** 
$$
\int_{\R^n} |f(\xv)|^2 d \xv = 
\int_{\R^n} |\hat f(\xiv)|^2 d \xiv.
$$

$f \in L^2(\R^3) \quad \Longrightarrow \quad \hat f \in L^2(\R^3)$, with 
$$
||\hat f||_{L^2} = ||f||_{L^2}.
$$

Using "polarization", it follows that the Fourier transform is an isometry of $L^2(\R^n)$. 

***Convolution formula*** 
$$
\int_{\R^n} f_1(\xv - \yv) f_2(\yv) d \yv = 
\int_{\R^n} \hat f_1(\xiv) \hat f_2(\xiv) \phi_\xiv(\xv) d \xiv.
$$
<Spacer size = "5px"/>

There are *many* relationships between differential, integral, and algebraic calculations involving functions and their Fourier transforms. 

---

### Properties of plane waves

Plane waves aren't elements of $L^2(\R^3)$, since $|\phi_{\xiv}(\xv)|^2 = 1 \quad \forall \ \xv \in \R^3$.
<Spacer size = "1px"/>

Plane waves are eigenvectors of the induced action of $(\R^3, +)$ on $C^\infty(\R^3, \C)$:
$$
\eqa{
(\yv \cdot \phi_{\xiv})(\xv) &= \phi_{\xiv}(\xv - \yv) \\
&= e^{2πi \langle \xiv, \xv - \yv \rangle} \\
&=  e^{2πi \langle \xiv, \xv  \rangle} e^{- 2πi \langle \xiv, \yv \rangle}\\
&= \frac {\phi_{\xiv}(\xv)}{\phi_{\xiv}(\yv)}
}
$$

$\Longrightarrow \ \ \ \phi_{\xiv}$ determines a one-dimensional representation of $(\R^3, +)$.
<Spacer size = "1px"/>

$(\R^3, +)$ isn't compact, so we can't invoke the results we've developed for representations of compact groups, but the Fourier transform is nonetheless extremely useful.

---

### "Indexing" eigenvectors of the Laplacian on $\R^3$

On the circle, the eigenvectors were indexed by $\Z$, and a harmonic function could be expressed as a limit of linear combinations of the eigenvectors. 
<Spacer size = "1px"/>
On $\R^3$, the "indices" of the eigenvectors run over all elements of $\R^3$. 

$f \in L^2(\R^3)$ is expressed as an integral&mdash;not a sum&mdash;over those "indices":
$$
\eqa{
f(\xv) 
&= \int_{\R^n} \hat f(\xiv) \phi_{\xv}(\xiv) d \xiv \\
&= \int_{\R^n} \hat f(\xiv) \phi_{\xiv}(\xv) d \xiv ,
}
$$

since 
$$
\phi_{\xv}(\xiv) = e^{2πi \langle \xiv, \xv \rangle} = \phi_{\xiv}(\xv).
$$


---

### The relationship between the Fourier transforms of $f$ and $∆f$

Sweeping a lot of analytical details under the rug, 
$$
∆f = w  \quad \Longleftrightarrow \quad \widehat{∆f} = \widehat w 
$$
and
$$
\eqa{
∆f(\xv) &= ∆ \int_{\R^n} \hat f(\xiv) \phi_{\xiv}(\xv) d \xiv \\
&=  \int_{\R^n} \hat f(\xiv) ∆ \phi_{\xiv}(\xv) d \xiv \\
&=  \int_{\R^n} \lp - 4π^2 |\xiv|^2\hat f(\xiv) \rp \phi_{\xiv}(\xv)  d \xiv 
}
$$
$\Longrightarrow$
$$
\widehat{∆f}(\xiv) = - 4π^2 |\xiv|^2\hat f(\xiv).
$$

---

### Second slide on the relationship between the Fourier transforms of $f$ and $∆f$

$$
\widehat{∆f} = \widehat w 
\quad \Longleftrightarrow \quad \hat{f}(\xiv) = - \frac {\widehat w(\xiv)}{4π^2 |\xiv|^2} \qquad \qquad \forall \ \xiv \in \R^3.
$$ 

Skipping over convergence arguments,
$$
f 
:= -  \frac 1 {4π^2} \int_{\R^n} \frac {\widehat w(\xiv)}{|\xiv|^2} \phi_{\xiv} d \xiv
$$
satisfies $\Delta f = w$.

Roughly speaking, the solution of $\Delta f = w$ can be expressed as a weighted average of plane waves, with weights determined by the ratios $\frac {\widehat w(\xiv)}{|\xiv|^2}$.

***Heads up!*** The smaller the magnitude of $\xiv$, the more $\widehat w(\xiv)$ is amplified.
<Spacer size = "5px"/>

If we can efficiently compute and "undo" Fourier transforms, solving $∆f = w$ is "easy" algebra.

---

#### Fast Fourier transforms

A [*fast Fourier transform (FFT)*](https://en.wikipedia.org/wiki/Fast_Fourier_transform) is an algorithm that efficiently computes the discrete Fourier transform (DFT)<br/>
 of a sequence, or its inverse (IDFT). 

A lot of data is discrete to start with, and continuous time (or other independent variable) dependent data is often discretized as part of the analysis process.

The standard 'naive' Discrete Fourier Transform (DFT) requires $O(N²)$ operations. 
<Spacer size = "5px"/>

The FFT uses "butterflies" (small 2-point computational blocks) and other strategies to avoid unnecessary recalculations; terms $e^{-2\pi i \, k\,n/N}$ (re)appear in naive calculations for multiple frequencies and time indices.

For real-valued data, Hermitian symmetry $\ \ \Longrightarrow \ \ {}$ only half of the spectrum needs to be computed.

The [Cooley-Tukey FFT](https://web.stanford.edu/class/cme324/classics/cooley-tukey.pdf) and descendants split a dataset into even and odd index subsets, and leverage the even/odd symmetry of sine and cosine.

Sophisticated variants of "vanilla" FFTs exploit additional structure (much of which can naturally be described in terms of equivariance and invariance) present in some situations.


---

### Harmonic homogeneous polynomials 

A polynomial $\ p:\R^n \to \C \ {}$ is *homogeneous of degree* $\ell$  if
$$
p(\lambda \, \xv )=\lambda^\ell p(\xv) \qquad \quad \forall \ \lambda \in \R, \xv \in \R^3.
$$
<Spacer size="2px"/>

For $n = 3$ and $\ell \in \N,$ let $A_\ell$ denote the harmonic homogeneous polynomials of degree $\ell$. 
 - $A_1 = \{ p(\xv) = \langle \mathbf{c}, \xv \rangle : \mathbf{c} \in \C^3 \},  {}$ the space of linear functions on $\R^3$.
 
 - $A_2 = \{ p(\xv) = \langle \mathbf{c}, \av_2(\xv) \rangle : \mathbf{c} \in \C^5 \},  {}$ where $\av_2: \R^3 \to \R^5$ is given by
$$
\av_2(x, y, z) := \lp x y, x z, y z, x^2 - y^2, x^2 - z^2 \rp.
$$
<Spacer size="2px"/>

If we identify one of the coordinate planes in $\R^3$ with $\C$ and let $P: \R^3 \to \C$ denote projection onto the plane, then $\xv \mapsto (P \xv)^\ell$ is a harmonic homogeneous polynomial. 

For example: $\qquad \qquad (x + i \, y)^2 = x^2 - y^2 + 2 x y \, i = \langle (2 i, 0, 0, 1, 0) , \av_2(\xv) \rangle.$

---

### Spherical harmonics

The equivariance of the Laplacian with respect to the orthogonal group $\ \ \Longrightarrow \ \ {}$ the kernel of the restriction of the Laplacian to an orbit of $O(n)$ equals the restrictions of elements of the kernel of the Laplacian to that orbit.

The spherical harmonics are the restrictions of the harmonic homogeneous polynomials on $\R^3$ to $S^2$.
<Spacer size="5px"/>

If $\tilde p$ denotes the expression of $p(x, y, z) = (x + i \, y)^\ell$ in terms of spherical coordinates $\ (r,\theta ,\varphi ), \ {}$ with $r = 1, \ {}$ then
$$
\eqa{
\tilde p(\theta ,\varphi) &= \lp \sin \theta \cos \varphi + i \, \sin\theta \sin \varphi  \rp^\ell \phantom{\sum}\\
&= e^{i\ell \varphi } \sin^\ell \theta .}
$$
<Spacer size="5px"/>

A separation of variables approach can be used to find the harmonic functions on $\R^3$ directly in spherical coordinates. 


---

#### Second slide on spherical harmonics: separation of variables

If
$$u(r, \theta, \varphi) = \rho(r) \sigma(\theta, \varphi),$$ 
then $\ \Delta u = 0 \ \Longleftrightarrow \ {}$
$\rho$ and $\sigma$ are eigenvectors of appropriate linear operators, with eigenvalues $\lambda$ and $- \lambda$.
<Spacer size="5px"/>

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

#### Third slide on spherical harmonics

$O(n)$ is compact, so the Peter-Weyl Theorem $\ \ \Longrightarrow \ \ L_2(O(n))$ decomposes into a Hilbert space direct sum of finite dimensional irreducible representations.

Spheres (centered at the origin) are orbits of $O(n)$, so it's hopefully not surprising that there are decompositions of the space of spherical harmonics into irreducible representations of $O(n)$.

The bookkeeping involved is more than seems beneficial to cover here. See Kirillov (or many, many other sources) for further information.
<Spacer size="1px"/>

The second order ODEs for both the spherical harmonics and the radial components of the expressions for the harmonic polynomials in spherical coordinates can be analysed using [Sturm-Liouville theory](https://math.okstate.edu/people/binegar/4233/4233-l15.pdf).

Sturm-Liouville equations are second order ODEs of the form
$$
\lp p(x)y' \rp' + q(x)y + \lambda \, w(x) y = 0,
$$
where $x$ is the independent variable, $y$ is the dependent variable, $p$ and $w$ are strictly positive "weight functions", $q$ is some function, and $\lambda$ is a scalar playing the role of a Lagrange multiplier (more or less).