## Representations

We typically work with actions that preserve any special structure of the manifold $M$.

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
g \cdot m = \rho(g)(m).
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

### Induced representations on scalar functions

An action $\rho$ of $G$ on a manifold $M$ induces a representation $\tilde \rho$ on the space of smooth scalar functions.
$$
\tilde \rho(g)(f) := f \circ \rho(g^{−1}), 
\qquad \text{i.e.} \qquad 
(g \cdot f)(m) = f(g^{−1} \cdot m).% \qquad \qquad \forall \ g \in G, m \in M.
$$

If $M$ is a complex manifold, replace smooth with holomorphic functions on $M$.
$~$

$\tilde \rho$ is a left action:  $\tilde \rho(g \, h) = \tilde \rho(g) \circ \tilde \rho(h)$.

*Verify:*
$$
\eqa{
((g \, h) \cdot f)(m) &= f((g \, h)^{-1} \cdot m) \\
&= f(h^{-1} \cdot (g^{-1}\cdot m)) \\
&= (h \cdot f)(g^{-1}\cdot m) \\
&= (g \cdot (h \cdot f))(m).
}
$$


---

### Induced representations on vector fields 

The action $\rho$ also induces representations via pushforward on ${\cal X}(M)$ and ${\cal X}^*(M)$, 
the spaces of smooth vector fields and one forms on $M$.
$~$
$$
\eqa{
g \cdot X &= (\rho(g)^* X)(m) \\
&= d_{\rho(g)^{-1}(m)} \rho(g)(X(\rho(g)^{-1}(m)) \\
% &= d_{g^{−1} \cdot m} \rho(g)(X(g^{−1} \cdot m)) 
&=\underbrace{d_{g^{−1} \cdot m} \rho(g)(\underbrace{X(g^{−1} \cdot m)}_{\in \, T_{g^{−1} \cdot m} M}) }_{\in \, T_m M} \, 
\qquad \qquad  \forall \ m \in M.
}
$$
$~$

Since pushforward by a composition of maps equals the corresponding composition of pushforwards, we have 
$$
(g \, h) \cdot X = \rho(g \, h)^* X 
= (\rho(g)\circ \rho(h))^* X
= \rho(g)^* (\rho(h)^* X) = g \cdot (h \cdot X).
$$

---

### Induced representations on one forms

Analogously, for any $\alpha \in {\cal X}^*(M)$ and $v_m \in T_m M,\phantom{\int^\int}$ 
$$
\eqa{
(g \cdot \alpha)(m)(v_m) &= (\rho(g)^* \alpha)(m)(v_m) \\
&= \lp d_m \rho(g)^{−1} \rp^* \alpha(g^{−1} \cdot m)(v_m) \\
&= \underbrace{\alpha(g^{−1} \cdot m)}_{\in \, T^*_{g^{−1} \cdot m} M}(\underbrace{d_m \rho(g)^{−1})(v_m)}_{\in \, T_{g^{−1} \cdot m} M}
}
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

Two crucial constructions in Lie group theory are the *adjoint representation* $\Ad: G \to \text{Aut}(T_1 G)$ 
$$
\Ad_g := \Ad(g) := d_1 (L_g \circ R_{g^{-1}}) 
$$ 
and its linearization at the identity $\ad: T_1 G \to \text{End}(T_1 G)$ 
$$
\ad := d_1 \Ad.
$$

The *Lie bracket* of $\xi$ and $\eta\in T_1 G\ {}$ is defined as
$$
[\xi, \eta] := \ad_\xi(\eta) := \ad(\xi)(\eta).
$$

---

### Example: The adjoint representation and Lie bracket of $G = GL(n, F)$

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

For any $C \in GL(n, F)$, linearity of matrix multiplication in $F^{n \times n}$ implies
$$
\eqa{
\Ad_{C}(B) &= \dep {C B (\epsilon) C^{-1}}\\
&= \dep{(\idm + \epsilon \, C B C^{-1} )}\\
&= C B C^{-1}.
}
$$

---

### Example contd.: Calculation of the Lie bracket of $G = GL(n, F)$

Setting $C = A(\epsilon) = \idm + \epsilon \, A$ and linearizing again, using 
$$
(\idm + \epsilon \, A)^{-1} = \idm - \epsilon \, A + {\cal O}(\epsilon^2),
$$
gives
$$
\eqa{
\ad_A(B) &= \dep {\Ad_{A(\epsilon)}(B)x} \\
&= \dep {(\idm + \epsilon \, A)B (\idm + \epsilon \, A)^{-1}} \\
&= \dep {\lp B + \epsilon \, (A B - B A) + {\cal O}(\epsilon^2) \rp} \\
&= A B - B A.
}
$$

$~$

Every Lie group $G$ is equipped with a map from $T_1 G$ to $G$... exponential map.

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

***Examples:*** 

1. $F^{n \times n}$ with the matrix commutator is a Lie algebra.

2. The space of endomorphisms of a vector space is a Lie algebra, with bracket given by the commutator.

3. $(\R^3, \times)$ is a Lie algebra, with bracket given by the cross product: $[\xv, \yv] = \xv \times \yv$.

---

## The Lie algebra of a Lie group

We'll see that for any Lie group $G$, $\fg := (T_1 G, [\ ,\ ])$, with bracket determined by $\text{ad}$, is a Lie algebra.

There are multiple ways of defining the bracket on $T_1G$, all of which are equivalent.

We'll construct two spaces of special vector fields on $G$, and an isomorphism between each of these spaces and the tangent space $T_1G$ of $G$ at the identity. 

We'll then use Lie derivatives to construct a Lie bracket on each family of vector fields.

### Examples

- $T_\idm GL(n, F) \approx F^{n \times n}$,  with the matrix commutator

- There is an algebra isomorphism between $(\R^3, \times)$ and ${\mathfrak so}(3) := (T_1 SO(3), [\ ,\ ])$.

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
$\ad: \fg \to \text{End}(\fg)$ is a Lie algebra representation. 

More generally, for any group homomorphism $φ : G → H$ between Lie groups, $d_1φ : \fg → \fh$ is a Lie algebra representation.
