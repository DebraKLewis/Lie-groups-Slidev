## The matrix exponential

The matrix exponential $\exp: F^{n \times n} \to GL(n, F), F = \R, \C,$ can be defined using the power series
$$
\exp(B) := \sum_{j = 0}^\infty \smallfrac 1 {j!} B^j.
$$

For our purposes, it will be most useful to regard $\exp(B)$ as the unit time solution of a pair of IVPs on $F^{n \times n}$ determined by $B$.
<Spacer size="5px"/>

Any matrices $B \in F^{n \times n}$ and $A_0 \in GL(n, F)$ determine a pair of IVPs
$$
\dot A = A B \sands \dot A = B A, \qquad \text{both with} \qquad A(0) = A_0,
$$
on $GL(n, F)$, with solutions
$$
A(t) = A_0 \exp(t \, B) \sands A(t) = \exp(t \, B) A_0 \qquad \forall \ t \in \R.
$$

---

### Calculating the matrix exponential: a few special cases  
<br/>

#### Diagonal
$$
A={\begin{bmatrix}a_{1}&0&\cdots &0\\0&a_{2}&\cdots &0\\\vdots &\vdots &\ddots &\vdots \\0&0&\cdots &a_{n}\end{bmatrix}} 
\qquad \Longrightarrow \qquad
\text{exp}(A) ={\begin{bmatrix}e^{a_{1}}&0&\cdots &0\\0&e^{a_{2}}&\cdots &0\\\vdots &\vdots &\ddots &\vdots \\0&0&\cdots &e^{a_{n}}\end{bmatrix}}.
$$ 
<Spacer/>

#### $2 \times 2$ canonical form for complex conjugate eigenvalues

$$
A =  \begin{bmatrix} \alpha & - \beta \\ \beta & \alpha \end {bmatrix}
\qquad \Longrightarrow \qquad
\text{exp}(A) = e^\alpha R_\beta, \qquad R_\beta := \begin{bmatrix} \cos \beta & -\sin \beta \\ \sin \beta& \cos \beta \end {bmatrix}.
$$

#### Nilpotent

$$
 A^k = 0 
\qquad \Longrightarrow \qquad
\text{exp}(A) = \sum_{j = 0}^{k - 1} {\textstyle 1 \over j!} A^j.
$$

---

### Calculating the matrix exponential: Bootstrapping from the special cases
<Spacer />

#### Matrix exponentiation commutes with change of basis

$$
\text{exp}\lp UBU^{−1} \rp = U\text{exp}(B)U^{−1}
$$
<Spacer />

#### Matrix exponentiation preserves block diagonal structure

$$
A=\begin{bmatrix}A_{1}&\cdots &0\\ \vdots &\ddots &\vdots \\ 0&\cdots &A_{n}\end{bmatrix} 
\qquad \Longrightarrow \qquad
\text{exp}(A) = \begin{bmatrix}\text{exp}(A_{1})&\cdots &0\\\vdots &\ddots &\vdots \\0&\cdots &\text{exp}(A_{n})\end{bmatrix}.
$$ 
<Spacer />

#### Exponentials of the sum of commuting matrices is the product of the exponentials

$$
AB = BA 
\qquad \Longrightarrow \qquad
\text{exp}(A + B) = \text{exp}(A) \text{exp}(B).
$$

Very important special case:
$$
\text{exp}(\lambda \, \idm + B) = e^\lambda \, \text{exp}(B).
$$

---

### Calculating the matrix exponential: Jordan Normal Form calls it!

The Jordan Normal Form Theorem guarantees that any square real or complex matrix can be put into a block diagonal form in which the exponential of each block can be read off.
<Spacer size="5px" />

**Example:** $3 \times 3$ Jordan block $\lambda \, \idm + N$
$$
\text{exp} \lp \begin{bmatrix} \lambda & 1 &0\\ 0 & \lambda & 1 \\ 
0& 0 & \lambda\end{bmatrix} \rp 
= e^\lambda \, \sum_{j = 0}^2 {1 \over j!} \begin{bmatrix} 0 & 1 &0\\ 0 & 0 & 1 \\ 0& 0 & 0 
\end{bmatrix}^j
= e^\lambda  \begin{bmatrix} 1 & 1 & \half \\ 0 & 1 & 1 \\ 0& 0 & 1 \end{bmatrix} .
$$
<Spacer size="5px" />

***Heads up!*** If we have a real matrix with repeated complex conjugate eigenvalue pairs, we may need to work with a block version of $\text{exp}(\lambda \, \idm + B) = e^\lambda \, \text{exp}(B)$, where $\lambda$ is a real $2 \times 2$ block matrix.
<Spacer size="8px" />

### Relationship between the trace, determinant, and exponential

$$
\det \lp \text{exp}(A) \rp = e^{\operatorname{tr} (A)}.
$$
<!-- See the appendix for more information. -->


---

### Recap: flows of vector fields

A *trajectory* over a time interval $I$ of a vector field $V \in \calX(M)$ is a continuous map $p: I \to M$ satifying
$$
p'(t) = V(p(t)) \qquad \forall \ t \in I.
$$ 
Given $p_0 \in M$, we refer to the *initial value problem (IVP)*
$$
p'(t) = V(p(t))\sands p(0) = p_0
$$ 
with *initial value* $p_0$. (We will typically assume that $0 \in I$.)

<Spacer/>

The *flow* or *flow map* of $V$ bundles together all of the trajectories with domain $I$ into a single map 
$$
\calF : M \times I \to M,
$$ 
such that for any $p_0 \in M$, the trajectory with initial value $p_0$ is given by
$$
p(t) = \calF(p_0, t).
$$ 

---

### Recap: interpretation and properties of flows

For any $t \in I$, we define $\calF_t : M \to M$, the *flow at time* $t$, by
$$
\calF_t(x) = \calF(x,t).
$$

We can regard the flow of $V$ as the solution $t \mapsto \calF_t$ of an IVP on the infinite dimensional manifold $\diffM$:
$$
\smallfrac {d F_t}{dt}  = V \circ F_t
\qquad \qquad F_0 = \text{id}_M.
%,\qquad \text{i.e.} \qquad
%\smallfrac{\partial  \ }{\partial t}\calF(p, y) = V(\calF(p, t)) \quad \forall \ p \in M, t \in I.
$$

<Spacer/>

***Heads up!*** We can explicitly determine $\calF$ only in very special situations!

We typically use implicit differentiation to extract information about $\calF$ from the ODE.

<Spacer/>

If $\varphi \in \diffM$ satisfies $\ \varphi^* V = V$, then $\varphi^* \calF_t = \calF_t,$ i.e. the flow of $V$ at time $t$ commutes with $\varphi$
$$
\calF_t \circ \varphi = \varphi \circ \calF_t.
$$

<!-- See appendix for a sketch of the proof. -->

---

### IVPs, flows, and one parameter subgroups

$\calF_0$ is the identity map&mdash;if no time has elapsed, nothing has changed. 
<Spacer/>

$$
\calF_s \circ \calF_t = \calF_{s + t} = \calF_t \circ \calF_s
$$ 
for any $s$ and $t$ for which those expressions are defined.
<Spacer/>

If $\calF_t$ is defined for all $t \in \R$, then 
$$
\{ \calF_t : t \in \R \}
$$ 
is an abelian group, with group operation being composition of maps, and $\ t \to \calF_t$ 
is a group homomorphism. 
<Spacer/>

We will use this homomorphism to associate abelian subgroups, called *one parameter subgroups*, to elements of the Lie algebra of a Lie group $G$.

---

### The matrix exponential is a unit time flow

The exponential map $\ \exp: \fg \to G\ {}$ of an arbitrary Lie groups $G$ generalizes the matrix exponential via
the role of the matrix exponential in the flow maps of constant coefficient ODEs:
<Spacer size="1px" />

Given $B \in F^{n \times n}$, the vector fields 
$$
X^L(A) := A B \sands X^R(A) := B A
$$
determine IVPs on $GL(F, n)$ with solutions
$$
A^L(t) = A_0 \exp(t \, B) \sands A^R(t) = \exp(t \, B)A_0.
$$
<Spacer size="5px" />

The corresponding time $t$ flow maps $\ \calF^L_t\ {}$ and $\ \calF^R_t\ {}$ are
$$
\calF^L_t = R_{\exp(t \, B)} \sands \calF^R_t = L_{\exp(t \, B)}. 
$$ 
<Spacer size="5px" />

These vector fields and flows generalize to arbitrary Lie groups!

---

## Left and right invariant vector fields 

Given $\xi \in \fg = T_1 G$, define the vector fields $X_\xi^\lozenge$ on $G$, where $\lozenge = L$ or $R$, by
$$
X_\xi^\lozenge(g) = d_1 \lozenge_g (\xi).
$$
<Spacer size="5px" />

***Claim:*** $X_\xi^\lozenge$ is $\lozenge$-*invariant*, i.e. 
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

### Triviality of the tangent bundle of a Lie group

The map $\ \tau_\lozenge: TG \to G \times \fg \ {}$ given by
$$
\tau_{\lozenge}(v_g) := (g, d_g {\lozenge}_{g^{-1}}(v_g))
$$
is smooth, with smooth inverse 
$$\
\lp \tau_\lozenge \rp^{-1}(g, \xi) = d_1 {\lozenge}_g(\xi) = X_\xi^{\lozenge}(g).
$$
Hence $TG$ is a trivial bundle diffeomorphic to $G \times \fg$. 

The triviality of the cotangent bundle $T^*G$ can be shown analogously.
<Spacer/>

This triviality and the convenient properties (to be shown) of the exponential map make calculus and "bundleology" on Lie groups almost as convenient as on vector spaces!

E.g., dynamical systems folk typically formulate second order ODEs on manifolds as first order ODEs on tangent bundles&mdash;a vector field on $TG$ is a map from $TG \approx G \times \fg$ to $T(TG) \approx G \times \fg \times \fg \times \fg$. 

---

### Existence of flows of $\lozenge$-invariant vector fields for all time

The triviality of the tangent bundle $TG$ leads to a "quasi-triviality" of the flows of $\lozenge$-invariant vector fields.

Specifically, the flow of a left (right) invariant vector fields is determined by the solution starting at the identity. 
<Spacer  size="5px" />

**Claim:** Let $\gamma_\xi$ denote the solution of the IVP
$$
g' = X_\xi^L(g) = d_1 L_g(\xi) \sands g(0) = 1.
$$
- $\gamma_\xi$ is a Lie group homomorphism from $\R$ to $G$, and is the only such homomorphism with derivative $\xi$ at $0$.
- $\gamma_\xi$ also satisfies 
$$
g' = X_\xi^R(g) = d_1 R_g(\xi).
$$
<Spacer size="5px" />

Existence for all time will follow from $\lozenge$-invariance: starting at the identity, we follow the trajectory for some time, and then "rachet" back to the identity, remembering where we left off. Rinse and repeat.

---

#### Key ingredient: $\gamma_\xi$ determines all solutions of IVPs determined by $X_\xi^L$

For any $g_0 \in G$, the parametrized curve $g := \lozenge_{g_0} \circ \gamma_\xi: I \to G$ satisfies $g(0) = g_0$ and
$$
\eqa{
%g'(t) &= d_{\gamma(t)} L_{g_0}(d_1L_{\gamma(t)}(\xi) )\\
%&= d_1 (L_{g_0} \circ L_{\gamma(t)})(\xi)\\
%&= d_1 L_{g_0  \gamma(t)} (\xi)\\
%&= d_1 L_{g(t)} (\xi)\\
%&= X_\xi^L(g(t)).
g'(t) &= d_{\gamma_\xi(t)} \lozenge_{g_0}(\gamma_\xi'(t)) \\
&= d_{\gamma_\xi(t)} \lozenge_{g_0}(X_\xi^\lozenge(\gamma_\xi(t))) \\
&= d_{\gamma_\xi(t)} \lozenge_{g_0}(d_1\lozenge_{\gamma_\xi(t)}(\xi) ).
}
$$

The Chain Rule $\quad \Longrightarrow$ 
$$
d_{\gamma_\xi(t)} \lozenge_{g_0} \circ d_1\lozenge_{\gamma_\xi(t)}
= d_1 (\lozenge_{g_0} \circ \lozenge_{\gamma_\xi(t)}).
$$
so 
$$
\lozenge_{g_0} \circ \lozenge_{\gamma_\xi(t)} = \lozenge_{\lozenge_{g_0}(\gamma_\xi(t))}
= \lozenge_{g(t)}
$$
$\Longrightarrow$ 
$$
g'(t) = d_1 \lozenge_{g(t)} (\xi) = X_\xi^\lozenge(g(t)).
%&= d_1 (\lozenge_{g_0} \circ \lozenge_{\gamma_\xi(t)})(\xi)\\
%&= d_1 \lozenge_{\lozenge_{g_0}(\gamma_\xi(t))} (\xi)\\
%&= d_1 \lozenge_{g(t)} (\xi)\\
%&= X_\xi^\lozenge(g(t)).
$$

---

#### The maximal domain of the flow of $X_\xi^{\lozenge}$ is $G \times \R$

The "rachet": Setting $g_0 = \gamma_\xi(t)$ in our previous calculation gives
$$
\calF_s(\gamma_\xi(t)) = \lozenge_{\gamma_\xi(t)}(\calF_s(1))
= \lozenge_{\gamma_\xi(t)}(\gamma_\xi(s)).
$$

Hence $s, t \in I \quad \Longrightarrow \quad s + t \in I$, with
$$
\gamma_\xi(s + t)  = \lozenge_{\gamma_\xi(t)}(\gamma_\xi(s)).
%\lozenge_{\gamma(t)}(\gamma(s)) = \calF_\xi^\lozenge(\gamma(t), s).
$$
<Spacer  size="5px" />

We can continue to "extend" the trajectory $\gamma_\xi$ indefinitely, so the domain of $\gamma_\xi$ is $\R$.

The calculation on the previous slide then implies that the solutions of all IVPs determined by $\lozenge$-invariant vector fields exist for all time.
<Spacer  size="5px" />

***Heads up!*** $\ \gamma_\xi$ is the trajectory starting at $1$ of both $X_\xi^L$ and $X_\xi^R$, but trajectories with nontrivial initial data $g_0$ will "see" the difference between left and right invariance unless $g_0$ commutes with $\gamma_\xi(t)$.

---

## The exponential map

The *exponential map* $\ \exp: \fg \to G \ {}$ is given by
$$
\exp(\xi) := \gamma_\xi(1),
$$
where $\gamma_\xi$ is defined as on the previous slides. 

The flow of $X_\xi^\lozenge\ {}$ satisfies
$$
\lp \calF_\xi^\lozenge \rp_t = \blacklozenge_{\gamma_\xi(t)}
$$
for all $t \in \R$, where $\blacklozenge = R$ if $\lozenge = L$, and vice versa.
<Spacer size="5px" />

$\gamma_\xi(0) = 1 \,{}$ and $\,\gamma_\xi'(0) = \xi \ \ \Longrightarrow \ \ d_0 \exp = \idm_\fg$.

$h(t) := \exp(t \, \xi)$ is the unique homomorphism from $(\R, +)$ to $G$ satisfying $h'(0) = \xi$. 

$h(\R)$ is called the *one parameter subgroup* of $G$ determined by $\xi$.

---

### Logarithmic coordinate charts

The exponential map can be used to construct atlases for $G$. 

$d_0 \exp = \idm_\fg$ and the Inverse Function Theorem $\ \ \Longrightarrow \ \ {}$ <br/>there is a neighborhood $U \subset \fg$ of $0$ such that $\exp|_U\ {}$ is a diffeomorphism onto its image.

The inverse of $\exp|_U$ is called a *logarithmic chart* and denoted by $\log: \exp(U) \to U.$
<Spacer size="5px" />

This logarithmic chart can be combined with left or right multiplication by $g$ to construct a chart centered at an arbitrary element $g \in G$, and thus construct an atlas for $G$: 

Let $\, \mathcal{U}_g := \lozenge_g(\exp(U))$ and define
$\phi_g: \mathcal{U}_g \to U$ by
$$
\phi_g(\lozenge_g(\exp(\eta))) := \eta.
$$

Since $\lozenge_g$ is a diffeomorphism and $\exp|_U$ is a diffeomorphism onto its image, $\phi_g$ is a diffeomorphism.

$\{ (\mathcal{U}_g, \phi_g ) \, : \, g \in G \}$ is an atlas for $G$.

---

### Homomorphisms of Lie groups and algebras

If a homomorphism $\ \varphi: G \to H$ is differentiable at $1$, then 
$$
\varphi(\exp(\xi)) = \exp(d_1 \varphi(\xi)) \qquad \forall \ \xi \in \fg.
$$
<Spacer size="5px" />

*Verify:* Fix $\xi \in \fg$. The homomorphism $\ h: (\R, +) \to H \ {}$ given by
$$
h(t) := \varphi(\exp(t \, \xi))
$$
satisfies
$$
h'(0) = d_1 \varphi(d_0 \exp(\xi)) = d_1 \varphi(\xi),
$$
so uniqueness of one parameter subgroups implies $\ h(t) = \exp(t \, d_1 \varphi(\xi))$.

<!--
---

### Homomorphisms of simply connected Lie groups 

FIX: The group and manifold structures of $G$ give the Lie algebra a lot of control over global behavior. 

If $G$ is simply connected and a morphism $\ f: G \to H$ is differentiable at $1$, then 

-->

---

### Relationships between the adjoint action, exponential, and Lie bracket

*Reminder:* The adjoint representation is the linearization at the identity of inner automorphisms of $G$: 
$$
\eqa{
\Ad: G &\to GL(\fg) \\
g &\mapsto \Ad_g = d_1 \lp L_g \circ R_{g^{-1}} \rp.
}
$$

The infinitesimal adjoint map is the linearization at the identity of the morphism $g \mapsto \Ad_g$:
$$
\eqa{
\ad: \fg &\to \text{End}(\fg) \\
\xi &\mapsto \ad_\xi = d_1 \Ad(\xi),
 }
$$
which satisfies $\ad_\xi(\eta) = [\xi, \eta]$.
<Spacer  size="2px" />

The previous result $\ \ \Longrightarrow \ \ {}$ for any $g \in G$ and $\xi \in \fg$, 
- $g \exp(\xi) g^{-1} = \exp(\Ad_g (\xi))$

- $\Ad_{\exp(\xi)} = \exp_{GL(\fg)} (\ad_\xi)$.

---

### More about the relationships between group and algebra homomorphisms

***Claim:*** If $φ: G → H$ is a group homomorphism, then $d_1φ$ is a Lie algebra homomorphism: 
$$
d_1φ([\xi, \eta]_\fg) = [d_1φ(\xi),d_1 φ(\eta)]_\fh \qquad \forall \ \xi, \eta ∈ \fg = T_1 G. 
$$
Equivalently,
$$
d_1 φ \circ \ad_\xi = \ad_{d_1φ(\xi)} \circ d_1 φ.
$$

*Verify:*  $\ φ$ a group homomorphism $\ \Longrightarrow$
$$
φ \circ R_{g^{-1}} \circ L_g = R_{φ(g)^{-1}} \circ L_{φ(g)} \circ φ. 
$$

Linearizing at $1$ gives
$$
d_1 φ \circ \Ad_g = \Ad_{φ(g)} \circ d_1 φ. 
$$

Setting $g = \exp(t \, \xi)$ and then differentiating w.r.t. $t$ yields
$$
d_1 φ \circ \ad_\xi = \ad_{d_1φ(\xi)} \circ d_1 φ.
$$

---

#### Special case: another relationship between the adjoint and infinitesimal adjoint representations

Taking $\ φ = L_g \circ R_{g^{-1}}\ {}$gives
$$
\Ad_g([\xi, \eta]) = [\Ad_g(\xi), \Ad_g(\eta)] \qquad \forall \ g \in G, \ \xi, \eta ∈ \fg. 
$$
<Spacer />

#### Example/exercise: $SO(3, \R)$ 

There is a Lie algebra homomorphism $\hat: \R^3 \to {\mathfrak so}(3, \R)$ between 
$$
\setdef {{\mathfrak so}(3, \R)} B {\R^{3 \times 3}} {B + B^T = 0}, \qquad \text{with} \qquad [B, C] = B C - C B,
$$
and $\R^3$ with 
$$[\xv, \yv]_{\R^3} = \xv \times \yv.$$

We can use this homomorphism to describe the adjoint representation of $SO(3, \R)$ on ${\mathfrak so}(3, \R)$ in terms of matrix-vector multiplication of $SO(3, \R)$ on $\R^3$: $A \in SO(3, \R) \quad \Longrightarrow$
$$
\Ad_A \hat \xv = \widehat{A \xv}
\sands 
A(\xv \times \yv) = (A \xv) \times (A \yv).
$$

---
routeAlias: BCH-Lie-Trotter
---

### Products of exponentials and exponentials of sums:<br/> the Baker-Campbell-Hausdorff and Lie–Trotter formulas

The *Baker-Campbell-Hausdorff* formula is a formal series expansion in terms of nested Lie brackets:
$$
\eqa{
\exp(t \, \xi)\exp(t \, \eta) &= \exp {\Large (} t(\xi+\eta) +\smallfrac {t^2} 2[\xi,\eta]+\smallfrac {t^3} {12} \lp [[\xi,\eta], \eta] - [[\xi,\eta], \xi]] \rp  \\
& \qquad \qquad + \text{higher order terms involving nested brackets} {\Large )}.
}
$$

Consequences: 

- $(\exp(\xi))^n =  \exp(n \, \xi).$

- The Lie–Trotter product formula
$$
\exp(\xi + \eta) = \lim_{n \to \infty} \lp \exp \lp \smallfrac 1 n \, \xi \rp \exp \lp \smallfrac 1 n \, \eta \rp \rp^n.
$$

- If $G$ is a Lie subgroup of $GL(V)$ for a vector space $V$, then 
$$\text{tr} (\log (\exp(\xi) \exp(\eta))) = \text{tr} \, \xi + \text{tr} \, \eta.$$

<!-- If $\ad_{[ \xi , \eta]}$ annihilates $\xi$ and $\eta$, then $\ \ \exp(\xi) \exp(\eta) =\exp \lp\xi + \eta + \half [\xi, \eta]\rp.$

<!-- 
$$
(\exp(\xi))^n = \underbrace{\exp(\xi) \cdots \exp(\xi)}_{\text{$n$ copies}} 
= \exp(\underbrace{ \xi + \cdots + \xi)}_{\text{$n$ copies}} 
= \exp(n \, \xi).
$$

<Spacer />

The integral formula
$$
\log \left(e^{X}e^{Y}\right)=X+\left(\int _{0}^{1}\psi \left(e^{\operatorname {ad} _{X}}~e^{t\operatorname {ad} _{Y}}\right)dt\right)Y.
$$
yields a tractable formula for $\ d_\xi \exp\ {}$ when $\xi \neq 0$ (see, e.g. Theorem 1.5.2 in Duistermat and Kolk):
$$
\eqa{
d_\xi \exp_G &= d_1 R_{\exp_G(\xi)} \circ \int_0^1 \exp_{GL(\fg)}(s \, \ad_\xi) ds \\
&= d_1 L_{\exp_G(\xi)} \circ \int_0^1 \exp_{GL(\fg)}(-s \, \ad_\xi) ds.
}
$$

---

### The Lie–Trotter product formula

$$
\exp(\xi + \eta) = \lim_{n \to \infty} \lp \exp \lp \smallfrac 1 n \, \xi \rp \exp \lp \smallfrac 1 n \, \eta \rp \rp^n.
$$
<Spacer size="5px"/>

*Verify:* The Baker-Campbell-Hausdorff formula $\ \ \Longrightarrow$

$$
\eqa{
\lp \exp \lp \smallfrac 1 n \, \xi \rp \exp \lp \smallfrac 1 n \, \eta \rp \rp^n 
&= \exp \lp \smallfrac 1 n (\xi + \eta) + O \lp n^{-2} \rp \rp^n \phantom{\sum} \\ 
&= \exp \lp \xi + \eta + O \lp n^{-1} \rp \rp.
}
$$
-->

---
routeAlias: Cartan-closed-subgroup
---

## Cartan's closed subgroup theorem

Closed subgroups of Lie groups are closed Lie subgroups.

*Verify:* Let $H$ be a closed subgroup of $G$.<br/>
Let $\fh$ denote the set of algebra elements in $\fg$ with one parameter subgroups contained in $H$.

***Claim 1.***
$\ \fh$ is a subspace of $\fg$.

*Verify:* $\fh$ is closed under scalar multiplication, since $\xi \in \fh \ \ \Longleftrightarrow \ \ \exp(t \, \xi) \in H \ \ \forall \ t \in \R$.

If $\xi, \eta \in \fh$, the Lie-Trotter formula and $H$ closed $\ \ \Longrightarrow \ \ {}$ 
$$
\exp(\xi + \eta) = \lim_{n \to \infty} \lp \exp \lp \smallfrac 1 n \, \xi \rp \exp \lp \smallfrac 1 n \, \eta \rp \rp^n \in H,
$$
so $\fh$ is closed under vector addition.

To obtain a convergent subsequence, we will invoke compactness after slapping an inner product on $\fg$ and normalizing to construct sequences on the unit spheres in $\fg$ and the orthogonal complement of $\fh$ in $\fg$. <br/>
(Any complement will work.)

---

#### Second slide of proof that closed subgroups of Lie groups are closed Lie subgroups

***Claim 2.*** If $\xi_1, \xi_2, \ldots \ \in \fg$ satisfy

- $\xi_n \neq 0\ {}$ and $\exp(\xi_n) \in H\ \ \ \forall \ n \in \mathbb{N}$,
- $\lim_{n \to \infty} \xi_n = 0$,
- $\displaystyle \zeta := \lim_{n \to \infty} \frac {\xi_n}{|\xi_n|}$ exists,

then $\zeta \in \fh$.

*Verify:* Fix $t \neq 0$ and let $k_n$ denote the integer part of $\displaystyle \frac t {|\xi_n|}$.
Then
$$
\eqa{
\exp(t \, \xi) &= \lim_{n \to \infty} \exp \! \lp  t \, \frac {\xi_n}{|\xi_n|} \rp \phantom{\sum} \\
&= \lim_{n \to \infty} \exp(k_n \xi_n) \phantom{\sum}\\
&= \lim_{n \to \infty} \exp(\xi_n)^{k_n} \in H.
}
$$

---

#### Third slide of proof that closed subgroups of Lie groups are closed Lie subgroups

***Claim 3.*** There is a a neighborhood $\mathcal{U}$ of $0$ in $\fh$ such that $\exp|_{\mathcal{U}}$ is a bijection onto its image.  

*Verify:* Define $f: \fh \oplus \fh^\perp \to G$, where $\fh^\perp$ is the orthogonal complement to $\fh$ in $\fg$, by
$$
f(\xi, \eta) := \exp(\xi) \exp(\eta).
$$
The linearization of $f$ at $(0, 0)$ is 
$$
d_{(0, 0)}f(\zeta, \omega) = \zeta + \omega,
$$
so $f$ is a local diffeomorphism.

Assume there are sequences $\{ \xi_n \}$ in $\fh$ and $\{ \eta_n \}$ in $\fh^\perp$ satisfying
- $\eta_n \neq 0$ and $f(\xi_n, \eta_n) \in H\ \ \ \forall \ n \in \mathbb{N}$, and
- $\lim_{n \to \infty} \xi_n + \eta_n = 0$.

We'll obtain a contradiction from this assumption.

---

#### Fourth slide of proof that closed subgroups of Lie groups are closed Lie subgroups

$\exp(\xi_n) \in H$, since $\xi_n \in \fh$, so $f(\xi_n, \eta_n) \in H \ \ \Longrightarrow$
$$
\exp(\eta_n) = \exp(\xi_n)^{-1} f(\xi_n, \eta_n) \in H.
$$

Compactness of the unit sphere in $\displaystyle \fh^\perp \ \ \Longrightarrow \ \ \left \{ \frac {\eta_n} {|\eta_n|} \right \}$ has a convergent subsequence, with limit $\zeta$. 

Claim 2 $\ \ \Longrightarrow \ \ \zeta \in \fh$. 

$\zeta \in \fh \cap \fh^\perp \ \  \Longrightarrow \ \ \zeta = 0$, but $\zeta$ is the limit of a sequence in the unit sphere in $\fh^\perp$. 

Contradiction! No such sequences $\{ \xi_n \}$ in $\fh$ and $\{ \eta_n \}$ in $\fh^\perp$ exist.

$\Longrightarrow \ \ \exists$ neighborhoods $\, \mathcal{U}$ of $0$ in $\fh$ and $\, \mathcal{V}$ of $1$ in $H$ such that $f|_{\mathcal{U} \times \{0\}} = \exp|_{\mathcal{U}}$ is a bijection onto $\mathcal{V}$. 
<Spacer/>

Finally, we can construct an atlas for $H$ using $\lp \exp|_{\mathcal{U}} \rp^{-1}: \mathcal{V} \to \mathcal{U}$ and  left (or right) multiplication, as for $G$.
