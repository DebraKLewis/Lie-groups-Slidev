---
marp: true
paginate: true
---


## The exponential map

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\Ad}{\text{Ad}}
\newcommand{\ad}{\text{ad}}
\newcommand{\sands}{\qquad \text{and}\qquad}
\newcommand{\av}{\mathbf{a}}
\newcommand{\bv}{\mathbf{b}}
\newcommand{\fv}{\mathbf{f}}
\newcommand{\xv}{\mathbf{x}}
\newcommand{\yv}{\mathbf{y}}
\newcommand{\idm}{\mathbb{1}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\Rn}{\mathbb{R}^n}
\newcommand{\calF}{{\cal F}}
\newcommand{\calX}{{\cal X}}
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\smallfrac}[2]{{\textstyle {#1 \over #2}}}
\newcommand{\half}{\smallfrac 1 2}
\newcommand{\ddt}{\smallfrac {d \ }{dt}}
\newcommand{\dep}[1]{\smallfrac {d \ }{d \epsilon} \left . #1 \right |_{\epsilon = 0}}
\newcommand{\eqa}[1]{\begin{align} #1 \end{align}}$The exponential map $\ \exp: \fg \to G\ {}$ generalizes the matrix exponential 
$$
\begin{align}
\exp: F^{n \times n} &\to GL(n, F)\\
\exp(A) &:= \sum_{j = 0}^\infty \smallfrac 1 {j!} A^j.
\end{align}
$$

The generalization doesn't build on the power series, but on the role of the matrix exponential in the flow maps of constant coefficient ODEs:
$~$
Any matrices $B \in F^{n \times n}$ and $A_0 \in GL(n, F)$ determine a pair of IVPs
$$
\dot A = A B \sands \dot A = B A, \qquad \text{both with} \qquad A(0) = A_0,
$$
on $GL(n, F)$, with solutions
$$
A(t) = A_0 \exp(t \, B) \sands A(t) = \exp(t \, B) A_0 \qquad \forall \ t \in \R.
$$

---

If we define the vector fields 
$$
X^L_B(A) := A B \sands X^R_B(A) := B A,
$$
the corresponding time $t$ flow maps $\ \calF^L_t\ {}$ and $\ \calF^R_t\ {}$ are
$$
\calF^L_t = R_{\exp(t \, B)} \sands \calF^R_t = L_{\exp(t \, B)}. 
$$
$~$
This is what generalizes to arbitrary Lie groups!

### Recap/lightning intro: flows determined by vector fields

A *trajectory* (over a time interval $I$) of a vector field $V \in \calX(M)$ is a continuous map $p: I \to M$ satifying
$$
p'(t) = V(p(t)) \qquad \forall \ t \in I.
$$ 
We will assume that $0 \in I$. Given $p_0 \in M$, we refer to the *initial value problem (IVP)*
$p'(t) = V(p(t))\ {}$ and $\ p(0) = p_0 \ {}$ with *initial value* $p_0$.

---

We can bundle all of the trajectories with domain $I$ together into a single map 
$$
F : M \times I \to M,
$$ 
called the *flow* or *flow map*, such that for any $p_0 \in M$, 
$$
p(t) = \calF(p_0, t)
$$ 
is an trajectory with initial value $p_0$. 
$~$
For any $t \in I$, we define $F_t : S \to S$, the *flow at time* $t$, by
$$
F_t(x) = F(x,t).
$$

The flow is directly determined by the ODE
$$
\smallfrac {d \calF_t}{dt}  = V \circ \calF_t
%,\qquad \text{i.e.} \qquad
%\smallfrac{\partial  \ }{\partial t}\calF(p, y) = V(\calF(p, t)) \quad \forall \ p \in M, t \in I.
$$
on $\diffM$. 

We can explicitly determine $\calF$ only in very special situations! 
We typically use implicit differentiation to extract information about $\calF$ from the ODE.

---

### Recap: properties of flows

$\calF_0$ is the identity map&mdash;if no time has elapsed, nothing has changed. 
$~$
$\calF_s \circ \calF_t = \calF_{s + t} = \calF_t \circ \calF_s\ {}$ for any $s$ and $t$ for which those expressions are defined.
$~$
If $\calF_t$ is defined for all $t \in \R$, then 
$$
G = \{ \calF_t : t \in \R \}
$$ 
is an abelian group, with group operation being composition of maps, and $\ t \to \calF_t$ 
is a group homomorphism. 
$~$
If $\varphi \in \text{Diff}(M)$ satisfies $\ \varphi^* V = V$, then the flow $\calF_t$ at time $t$ of $V$ commutes with $\varphi$, i.e.
$$
\calF_t \circ \varphi = \varphi \circ \calF_t.
$$

---

*Verify:* By definition of the flow, $\calF_t(\varphi(p))$  is the solution of the IVP determined by $V$ with initial data $\varphi(p)$.

$\ \varphi^* V = V \qquad \Longrightarrow$
$$
\begin{align}
\ddt \varphi(\calF_t(p)) &= d_{\calF_t(p)} \varphi \lp \ddt \calF_t(p) \rp \\
&= d_{\calF_t(p)} \varphi(V(\calF_t(p))) \\
&= V(\varphi(\calF_t(p)).
\end{align}
$$
Hence $\varphi(\calF_t(p))$ also satisfies the IVP determined by $V$ with initial $\varphi(p)$.

Uniqueness of solutions implies $\ \calF_t(\varphi(p)) = \varphi(\calF_t(p))$.
$~$
Letting $\varphi = \lozenge_g$, it follows that the  flows of left (resp. right) invariant vector fields commute with left (resp. right) multiplication.
$~$


---


Given $g_0 \in G$, if we define $g: I \to G$ by
$$
g(t) := g_0 \gamma_\xi(t)),
$$
then
$$
\eqa{
g'(t) &= d_{\gamma(t)} L_{g_0}(d_1L_{\gamma(t)}(\xi) )\\
&= d_1 (L_{g_0} \circ L_{\gamma(t)})(\xi)\\
&= d_1 L_{g_0  \gamma(t)} (\xi)\\
&= d_1 L_{g(t)} (\xi)\\
&= X_\xi^L(g(t)).
%g'(t) &= d_{\gamma(t)} \lozenge_{g_0}(d_1\lozenge_{\gamma(t)}(\xi) )\\
%&= d_1 (\lozenge_{g_0} \circ \lozenge_{\gamma(t)})(\xi)\\
%&= d_1 \lozenge_{\lozenge_{g_0}(\gamma(t))} (\xi)\\
%&= d_1 \lozenge_{g(t)} (\xi)\\
%&= X_\xi^\lozenge(g(t)).
}$$


***Non-standard notation alert:***
Much of what's coming up is defined entirely analogously for both left and right multiplication on $G$, so I'm going to use the symbol $\ \lozenge \ {}$ to indicate 
"L or R, as long as you're consistent", and.

---

### Left and right invariant vector fields 

Given $\xi \in \fg = T_1 G$, define the vector fields $X_\xi^\lozenge$ on $G$ by
$$
X_\xi^\lozenge(g) = d_1 \lozenge_g (\xi).
$$

***Claim:*** $X_\xi^\lozenge$ is $\lozenge$ *invariant*, i.e. 
$$
\lozenge_g^* X_\xi^\lozenge =  X_\xi^\lozenge \qquad \quad \forall \ g \in G.
$$
*Verify:*
$$
\eqa{
\lp (\lozenge_g)^*X_\xi^\lozenge \rp (h) &= \lp d_h\lozenge_g \rp^{-1} (X_\xi^\lozenge(\lozenge_g(h)))\\
&= d_{\lozenge_g(h)} \lozenge_{g^{-1}} \lp d_1 \lozenge_{\lozenge_g(h)}(\xi) \rp \\
&= d_1 \lp \lozenge_{g^{-1}} \circ \lozenge_{\lozenge_g(h)} \rp(\xi) \\
&= d_1 \lozenge_h(\xi) \\
&= X_\xi^\lozenge(h).}
$$

---

The map $\ \tau_\lozenge: TG \to G \times \fg \ {}$ given by
$$
\tau_{\lozenge}(v_g) := (g, d_g {\lozenge}_{g^{-1}}(v_g))
$$
is smooth, with smooth inverse 
$$\
\lp \tau_\lozenge \rp^{-1}(g, \xi) = d_1 {\lozenge}_g(\xi) = X_\xi^{\lozenge}(g).
$$
Hence $TG$ is a trivial bundle diffeomorphic to $G \times \fg$. 

---

The triviality of the tangent bundle $TG$ leads to a "quasi-triviality" of the flows of the left and right invariant vector fields.

Specifically, the flow of a left (right) invariant vector fields is determined by the solution starting at the identity. 
$~$
**Claim:** Let $\gamma_\xi$ denote the solution of the IVP
$$
g' = X_\xi^L(g) = d_1 L_g(\xi) \sands g(0) = 1.
$$
- $\gamma_\xi$ is a Lie group homomorphism from $\R$ to $G$, and is the only such homomorphism with derivative $\xi$ at $0$.
- $\gamma_\xi$ also satisfies 
$$
g' = X_\xi^R(g) = d_1 R_g(\xi).
$$

---

*Special case: $G$ a subgroup of $GL(n, F)$*

$$
\gamma_\xi(t) = \exp(t \, \xi) = \sum_{j = 0}^\infty \smallfrac 1 {j!} (t \, \xi)^j,
$$ 
since for $\ \xi \in F^{n \times n}$
$$\eqa{
\ddt {\textstyle \sum_{j = 0}^\infty} \smallfrac 1 {j!} (t \, \xi)^j 
&= {\textstyle \sum_{j = 1}^\infty} \smallfrac {t^{j - 1}} {(j - 1)!} \xi^j \\
&= \lp {\textstyle \sum_{j = 1}^\infty} \smallfrac {t^{j - 1}} {(j - 1)!} \xi^{j - 1} \rp \xi \\
&= \exp(t \, \xi) \xi  \\
&= X^L_\xi(\gamma_\xi(t)).
}
$$

Factoring $\xi$ out on the left, rather than the right, yields
$$
\ddt \exp(t \, \xi) = \xi \exp(t \, \xi) = X^R_\xi(\gamma_\xi(t)).
$$

---

*Verify for a real Lie group:* 

Given $g_0 \in G$, if we define $g: I \to G$ by
$$
g(t) := g_0 \gamma_\xi(t)),
$$
then
$$
\eqa{
g'(t) &= d_{\gamma(t)} L_{g_0}(d_1L_{\gamma(t)}(\xi) )\\
&= d_1 (L_{g_0} \circ L_{\gamma(t)})(\xi)\\
&= d_1 L_{g_0  \gamma(t)} (\xi)\\
&= d_1 L_{g(t)} (\xi)\\
&= X_\xi^L(g(t)).
%g'(t) &= d_{\gamma(t)} \lozenge_{g_0}(d_1\lozenge_{\gamma(t)}(\xi) )\\
%&= d_1 (\lozenge_{g_0} \circ \lozenge_{\gamma(t)})(\xi)\\
%&= d_1 \lozenge_{\lozenge_{g_0}(\gamma(t))} (\xi)\\
%&= d_1 \lozenge_{g(t)} (\xi)\\
%&= X_\xi^\lozenge(g(t)).
}$$

The flow property $\ \calF_t \circ \calF_s = \calF_{s + t} = \calF_s \circ \calF_t\ {}$ implies 

$$
γ_\xi(t + s) = \calF_\xi(1, t+s) =\calF_\xi(\calF_\xi(1, t), s) = \calF_\xi(γ_\xi(t), s).
$$

---

$$
γ_\xi(t + s) = \calF_\xi(1, t+s) =\calF_\xi(\calF_\xi(1, t), s) = \calF_\xi(γ_\xi(t), s). = γ_\xi(t)\calF_s(1) = γ_\xi(t)γ_\xi(s)
$$

$\calF_s \circ \calF_t = \calF_{s + t} = \calF_t \circ \calF_s\ {}$

Uniqueness of solutions of IVPs and $g(0) = g_0$ imply that $\ \calF_\xi^\lozenge(g_0, t) = g(t)$.
$~$
We can use this relationship, in combination with the general flow property
$$
\calF_{t + s} = \calF_t \circ \calF_s = \calF_s \circ \calF_t
$$
to show that the maximal domain of $\calF_\xi^{\lozenge}$ is $G \times \R$.

For any  $s, t \in I$, we can define 
$$
\gamma(s + t)  := \lozenge_{\gamma(t)}(\gamma(s)) = \calF_\xi^\lozenge(\gamma(t), s).
$$
Hence the domain of $\gamma$, and thus that of $g$, can be extended to all of $\R$.
$~$
---

The *exponential map* $\ \exp: \fg \to G \ {}$ is given by
$$
\exp(\xi) := \gamma_\xi(1),
$$
where $\gamma$ is determined as above by $\xi$. 

The flow $\ \calF_\xi^L: G \times I \to G\ {}$ satisfies
$$
\lp \calF_\xi^\lozenge \rp_t = \blacklozenge_{\gamma_\xi(t)} \phantom{\int_\int}
$$
for all $t \in I$, where $\blacklozenge = R$ if $\lozenge = L$, and vice versa.

---

The series expansion for the exponential can be used to calculate the exponential map for the general linear group of a vector space $V$:
$$
\setdef {GL(V)} \fv {L(V, V)} {\fv \ \text{invertible}}.
$$

Here matrix multiplication is replaced by composition of (linear) maps:
$$
\fv^2 = \fv \circ \fv, \qquad \fv^3 = \fv \circ \fv \circ \fv, \qquad \text{etc.}
$$

*Example:* The exponential of a nilpotent map can be directly calculated from the series expansion: If $\fv: V \to V$ satisfies $\ \fv^k = {\mathbf 0}\ {}$ for some $k \in {\mathbb N}, \ {}$ then
$$
\exp(\fv)  = \sum_{j = 0}^{k - 1} \smallfrac 1 {j!} \fv^j.
$$

Calculations involving the exponential map usually invoke properties developed from
- local existence and uniqueness of solutions of IVPs, and 
- $\lozenge$ invariance.

---

### Properties of the exponential map

$h(t) := \exp(t \, \xi)\ {}$ is the unique homomorphism from $(\R, +)$ to $G$ with $\ h'(0) = \xi$.

*Verify:* 
$$
h(t) = \exp(t \, \xi) = \calF_{t \, \xi}^\lozenge(1, 1) = \calF_{\xi}^\lozenge(1, t),
$$
since $\xi \to X_\xi^\lozenge$ is linear. (Use change of variables to rescale time.)
Hence 
$$
h'(t) = X_\xi^\lozenge(h(t)) = d_1 \lozenge_{h(t)}(\xi), 
$$
so $\ h(0) = 1 \ \Longrightarrow \ h'(0) = \xi$.

Uniqueness of $h$ follows from uniqueness of solutions of IVPs. 
$~$

$h(\R)$ is called the *one parameter subgroup* of $G$ correponding to $\xi \in \fg$.

---

$\exists$ neighborhood $U \subset \fg$ of $0$ such that $\ \exp|_U\ {}$ is a diffeomorphism onto its image.

The inverse of $\exp|_U$ is called a *logarithmic chart* and denoted by $\log: \exp(U) \to U.$

This chart can be combined with left or right multiplication by $g$ to construct a chart centered at an arbitrary element $g \in G$, and thus to construct an atlas for $G$.
$~$
Consider Lie groups $G$ and $H$, with Lie algebras $\fg$ and $\fh$. 
If a homomorphism $\ f: G \to H$ is differentiable at $1$, then 
$$
f(\exp(\xi)) = \exp(d_1 f(\xi)) \qquad \forall \ \xi \in \fg.
$$
*Verify:* Fix $\xi \in \fg$ and define $\ h: (\R, +) \to H \ {}$ by
$$
h(t) := f(\exp(t \, \xi)).
$$
The Chain Rule implies that
$$
h'(0) = d_1 f(d_0 \exp(\xi)) = d_1 f(\xi),
$$
so uniqueness of one parameter subgroups implies $\ h(t) = \exp(t \, d_1 f(\xi))$.

---

***Very important special cases:***

Reminder:
$$\eqa{
\Ad: G &\to GL(\fg) \\
g &\mapsto \Ad_g := d_1 \lp L_g \circ R_{g^{-1}} \rp
}
$$
is the adjoint representation. 

The infinitesimal adjoint map $\ \ad_\xi \in L(\fg, \fg)$ is given by 
$$
\ad_\xi = d_1 \Ad(\xi).
$$
$~$
***Claim:*** For any $g \in G$ and $\xi \in \fg$, 
- $g \exp(\xi) g^{-1} = \exp(\Ad_g (\xi))$
- $\Ad_{\exp(\xi)} = \exp_{GL(\fg)} (\ad_\xi) \phantom {{\int^\int}^\int}$.

---

*Verify:* 

$h \mapsto g h g^{-1}$ is an automorphism of $G$, with linearization $\Ad_g$ at $1$.

$$\gamma(t) = \exp(t \, \xi)
\qquad \text{satisfies} \qquad
\gamma(0) = 1 \sands \gamma'(0) = \xi.
$$

$$
\Ad_g(\xi) = \dep{\Ad_g(\gamma(\epsilon))}.
$$
Hence the first claim follows from the previous result, taking $f = L_g \circ R_{g^{-1}}$.
$~$
$g \mapsto \Ad_g$ is a homomorphism from $G$ to $GL(\fg)$, with linearization $\xi \to \ad_\xi$ at $1$, so
$$
\ad_\xi = \dep{\Ad_{\gamma(\epsilon)}}.
$$
Hence the second claim follows analogously, taking $f = \Ad$.
$~$
$~$
$~$
$~$


