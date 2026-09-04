---
marp: true
paginate: true
---

## Representations

$\newcommand{\fg}{\mathfrak{g}}
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
\newcommand{\lp}{\left (}
\newcommand{\rp}{\right )}
\newcommand{\setdef}[4]{#1 = \{ #2 \in #3 : #4 \}}
\newcommand{\diffM}{\mbox{Diff}(M)}
\newcommand{\half}{{\textstyle {1 \over 2}}}
\newcommand{\dep}[1]{{\textstyle {d \ \over d \epsilon}} \left . #1 \right |_{\epsilon = 0}}$We typically work with actions that preserve any special structure of the manifold $M$.

A *representation* of a Lie group *G* is a vector space *V* and group morphism 
$$\rho: G \to \text{End}(V).$$ 
If $V$ is finite-dimensional, $\rho$ must be smooth (respectively analytic). 

### Examples

- For $F = \R$ or $\C$, $F^n$ is a representation of $GL(n, F)$ with the action determined by matrix-vector multiplication.

- $T_1 G$, with the *adjoint action* 
$$
\rho(g) = d_1 (L_g \circ R_{g^{-1}}).
$$

---

***Notation:*** When the action is clear in context, we often use the concise notation
$$
g \cdot m =\rho(g)(m).
$$
I often use the notation $g \, v$ when working with representations of matrix groups.
$~$
A *morphism between representations $V$ and $W$ of $G$* is a linear map $f : V \to W$ that commutes with the  actions: 
$$
f \circ ρ_V(g) = ρ_W(g) \circ f \qquad \forall \ g \in G.
$$
$~$
***Example:*** $\R^2$ is a representation of $\setdef {S^1} z \C {|z|=1}$, with action determined by scalar multiplication in $\C$ and maps
$$
f(x + i \, y) = \begin{bmatrix}x \\ y\end{bmatrix} \sands
\cos \theta + i \, \sin \theta \mapsto \begin{bmatrix} \cos \theta & - \sin \theta \\ \sin \theta & \ \ \cos \theta \end{bmatrix}.
$$ 

---

### Induced representations

An action $\rho$ of $G$ on a manifold $M$ induces a representation $\tilde \rho$ on the space of smooth scalar functions $C^\infty(M)$;
$$
g \cdot f = f \circ \rho(g^{−1}), 
\qquad \mbox{i.e.} \qquad 
(g \cdot f)(m) = f(g^{−1} \cdot m).% \qquad \qquad \forall \ g \in G, m \in M.
$$
$~$
Verify that this is a left action i.e. $\tilde \rho(g \, h) = \tilde \rho(g) \circ \tilde \rho(h)$
$$
\begin{align}
((g \, h) \cdot f)(m) &= f((g \, h)^{-1} \cdot m) \\
&= f(h^{-1} \cdot (g^{-1}\cdot m)) \\
&= (h \cdot f)(g^{-1}\cdot m) \\
&= (g \cdot (h \cdot f))(m).
\end{align}
$$
$~$
If $M$ is a complex manifold, replace smooth with holomorphic functions on $M$.

---

The action $\rho$ also induces representations via pushforward on ${\cal X}(M)$ and ${\cal X}^*(M)$, 
the spaces of smooth vector fields and one forms on $M$.
$~$
$$
\begin{align}
g \cdot X &= (\rho(g)^* X)(m) \\
&= d_{\rho(g)^{-1}(m)} \rho(g)(X(\rho(g)^{-1}(m)) \\
% &= d_{g^{−1} \cdot m} \rho(g)(X(g^{−1} \cdot m)) 
&=\underbrace{d_{g^{−1} \cdot m} \rho(g)(\underbrace{X(g^{−1} \cdot m)}_{\in \, T_{g^{−1} \cdot m} M}) }_{\in \, T_m M} \, 
\qquad \qquad  \forall \ m \in M.
\end{align}
$$

Since pushforward by a composition of maps equals the corresponding composition of pushforwards, we have 
$$
(g \, h) \cdot X = \rho(g \, h)^* X 
= (\rho(g)\circ \rho(h))^* X
= \rho(g)^* (\rho(h)^* X) = g \cdot (h \cdot X).
$$

---

Analogously, for any $\alpha \in {\cal X}^*(M)$ and $v_m \in T_m M,\phantom{\int^\int}$ 
$$
\begin{align}
(g \cdot \alpha)(m)(v_m) &= (\rho(g)^* \alpha)(m)(v_m) \\
&= \lp d_m \rho(g)^{−1} \rp^* \alpha(g^{−1} \cdot m)(v_m) \\
&= \underbrace{\alpha(g^{−1} \cdot m)}_{\in \, T^*_{g^{−1} \cdot m} M}(\underbrace{d_m \rho(g)^{−1})(v_m)}_{\in \, T_{g^{−1} \cdot m} M}
\end{align}
$$
and $\ (g \, h) \cdot \alpha = g \cdot (h \cdot \alpha).$
$~$
These pushforward representations fit together:
$$
\iota_{g \cdot X} (g \cdot \alpha) = g \cdot (\iota_X \alpha),
$$
where
$$
\iota_X \alpha(m) := \alpha(m)(X(m))\qquad \qquad  \forall \ m \in M. 
$$

---

## The adjoint representation and the Lie bracket 

Inner automorphisms 
$$\rho(g) = L_g \circ R_{g^{-1}}$$ 
fix the identity. Since left and right multiplication are invertible, the linearization of $\rho(g)$ at 1 is an automorphism of $T_1G$.

The *adjoint representation* $\Ad: G \to \mbox{Aut}(T_1 G)$ 
$$
\Ad_g :=  d_1 (L_g \circ R_{g^{-1}}) 
$$ 
and its linearization 
$$
\ad := d_1 \Ad: T_1 G \to \mbox{End}(T_1 G)
$$
at $1$ are key constructions in Lie group theory. 
$~$


---

The *Lie bracket* of $\xi$ and $\eta\in T_1 G\ {}$ is defined as
$$
[\xi, \eta] := \ad_\xi(\eta) := \ad(\xi)(\eta).
$$

$~$

### Example: $G = GL(n, F)$

The prototypical Lie bracket is the *matrix commutator*
$$
[A, B] = AB - BA.
$$
$~$
$GL(n, F)$ is open in $F^{n \times n}$, so $T_1 GL(n, F) \approx F^{n \times n}$, and $A, B \in F^{n \times n}$ determine curves
$$
A(\epsilon) =  \idm + \epsilon \, A  \sands B(\epsilon) =  \idm + \epsilon \, B
$$
in $GL(n, F)$ for sufficiently small $\epsilon$.

---

For any $C \in GL(n, F)$, linearity of matrix multiplication in $F^{n \times n}$ implies
$$
\begin{align}
\Ad_{C}(B) &= \textstyle{d \ \over d \epsilon}C B (\epsilon) C^{-1} |_{\epsilon = 0}\\
&= \textstyle{d \ \over d \epsilon}(\idm + \epsilon \, C B C^{-1} )|_{\epsilon = 0}\\
&= C B C^{-1}.
\end{align}
$$
Setting $C = A(\epsilon)$ and linearizing again, using 
$$
(\idm + \epsilon \, A)^{-1} = \idm - \epsilon \, A + {\cal O}(\epsilon^2),
$$
gives
$$
\begin{align}
\ad_A(B) &= \textstyle{d \ \over d \epsilon} \Ad_{A(\epsilon)}(B)|_{\epsilon = 0} \\
&= \textstyle{d \ \over d \epsilon} (\idm + \epsilon \, A)B (\idm + \epsilon \, A)^{-1} |_{\epsilon = 0} \\
&= \textstyle{d \ \over d \epsilon} \lp B + \epsilon \, (A B - B A) + {\cal O}(\epsilon^2) \rp |_{\epsilon = 0} \\
&= A B - B A.
\end{align}
$$

---

## Lie algebras

A *Lie algebra* is a vector space $V$ over a field $F$, with a binary operation 
$$
[\ , \ ]: V \times V \to V
$$
satisfying
- bilinearity: $\ [ax+by,z]=a[x,z]+b[y,z]$
- alternating property: $\ [x, x] = 0$
- the Jacobi identity: $\ [x,[y,z]]+[y,[z,x]]+[z,[x,y]]=0$.

$~$
***Examples:*** 

1. $F^{n \times n}$ with the matrix commutator is a Lie algebra.

---

2. More generally, the space $\text{End}(V) = {\mathfrak {gl}}(V)$ of endomorphisms of a vector space $V$ is a Lie algebra, with bracket given by the commutator.


3. $(\R^3, \times)$ is a Lie algebra, with bracket given by the cross product:
$$
\xv \times \yv = \xv \times \yv.
$$
$~$
We'll see that for any Lie group $G$, $\fg := (T_1 G, [\ ,\ ])$, with bracket determined by $\text{ad}$, 
is a Lie algebra.
(There are multiple ways of defining the bracket on $T_1G$, all of which are equivalent.)
$~$
There is an algebra isomorphism between $(\R^3, \times)$ and ${\mathfrak so}(3) = (T_1 SO(3), [\ ,\ ])$.
$~$
$~$
$~$

---

### Lie algebra representations

A *representation of a Lie algebra* $\fg$ is a pair $(V, \rho)$ of 
- a vector space $V$ and 
- a Lie algebra homomorphism $\rho: \fg \to \text{End}(V)$, 

i.e. $\rho$ is a linear map satisfying
$$
\rho ([\xi, \eta])= [\rho (\xi), \rho (\eta)] = \rho (\xi)\rho (Y)-\rho (Y)\rho (\xi)
$$
for all $\xi, \eta \in \fg$.

$~$
$\text{ad}: \fg \to \text{End}(\fg)$ is a Lie algebra representation. 

More generally, for any group homomorphism $φ : G → H$ between Lie groups, $d_1φ : \fg → {\mathfrak h}$ is a Lie algebra representation.



