## Representations

We typically work with actions that preserve any special structure of the manifold $M$.

A *representation* of a Lie group *G* is a vector space *V* and group morphism 
$$\rho: G \to \text{End}(V).$$ 
If $V$ is finite-dimensional, $\rho$ must be smooth (analytic if $G$ is complex). 

### Examples

- For $F = \R$ or $\C$, $F^n$ is a representation of $GL(n, F)$ with the action determined by matrix-vector multiplication.

- $V = T_1 G$, with the *adjoint action* 
$$
\rho(g) = d_1 (L_g \circ R_{g^{-1}}).
$$
$\quad$ Much more about this example soon!

---

***Notation:*** When the action is clear in context, we often use the concise notation
$$
g \cdot m = \rho(g)(m).
$$
I often use the notation $g \, v$ when working with representations.
$~$

A *morphism between representations $V$ and $W$ of $G$* is a linear map $f : V \to W$ that commutes with the  actions: 
$$
f \circ ρ_V(g) = ρ_W(g) \circ f \qquad \forall \ g \in G.
$$
<Spacer />

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

Analogously, an action $\rho$ induces <Link to="representations-via-pushforward">representations via pushforward on ${\cal X}(M)$ and ${\cal X}^*(M)$</Link>, 
the spaces of smooth vector fields and one forms on $M$.
<Spacer size="1px" />

***Claim:*** $\tilde \rho$ is a left action, i.e.  $\tilde \rho(g \, h) = \tilde \rho(g) \circ \tilde \rho(h)$.

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

1. $F^{n \times n}$ with the matrix commutator.

2. More generally, given a vector space $V$, the space $\text{End}(V)$ of endomorphisms of $V$, with bracket given by the commutator.

3. $(\R^3, \times)$  with bracket given by the cross product: $[\xv, \yv] = \xv \times \yv$.


---

### Lie algebra representations

A *representation of a Lie algebra* $\fg$ is a pair $(V, \rho)$ of 
- a vector space $V$ and 
- a Lie algebra homomorphism $\rho: \fg \to \text{End}(V)$, 

i.e. $\rho$ is a linear map satisfying
$$
\eqa{
\rho ([\xi, \eta]_\fg) &= [\rho (\xi), \rho (\eta)]_{\text{End}(V)} \phantom{\sum} \\
&= \rho (\xi)\rho (Y)-\rho (Y)\rho (\xi)
}
$$
for all $\xi, \eta \in \fg$.
<Spacer size="2px"/>

***Very important special case:*** We'll show in the next few slides that $T_1G$ has a natural Lie algebra structure. <br/>
A representation $\rho: G \to \text{End}(V)$ determines a Lie algebra representation
$$
d_1 \rho: T_1 G \to T_1 \text{End}(V) \approx \text{End}(V).
$$ 

---

### The adjoint and infinitesimal adjoint representations

The structure of a Lie group is largely determined by the maps obtained by repeated linearization at the identity of inner automorphisms: The action
$$\rho(g) := L_g \circ R_{g^{-1}}$$ 
of $G$ on itself fixes the identity. <br/> Since left and right multiplication are invertible, the linearization of $\rho(g)$ at 1 is an automorphism of $T_1G$.

The *adjoint representation* $\Ad: G \to \text{Aut}(T_1 G)$ is given by
$$
\Ad_g := \Ad(g) := d_1 (L_g \circ R_{g^{-1}}).
$$

The adjoint representation and its linearization
$$
\ad := d_1 \Ad : T_1 G \to \text{End}(T_1 G)
$$
at the identity encode the nontriviality of the inner automorphisms, i.e. the extent to which $G$ fails to be commutative. 

---

### The Lie algebra of a Lie group

We'll see that for any Lie group $G$, $\fg := (T_1 G, [\ ,\ ])$, with bracket determined by $\text{ad}$, is a Lie algebra.

There are multiple ways of defining the Lie bracket on $T_1G$, which are equivalent (up to sign convention).

- The Lie bracket of $\xi$ and $\eta\in T_1 G\ {}$ can be defined as
$$
[\xi, \eta] := \ad_\xi(\eta) := \ad(\xi)(\eta).
$$

- We can construct two spaces of vector fields on $G$, and an isomorphism between each of these spaces and $T_1G$ of $G$, then use Lie derivatives to construct a Lie bracket on each family of vector fields.

$~$

#### Examples

- $T_\idm GL(n, F) \approx F^{n \times n}$, with the matrix commutator

- There is an algebra isomorphism between $(\R^3, \times)$ and ${\mathfrak so}(3) := (T_1 SO(3), [\ ,\ ])$.

---

#### Example: The infinitesimal adjoint representation of $T_1 GL(n, F) \approx F^{n \times n}$

The prototypical Lie bracket is the *matrix commutator*
$$
[A, B] = AB - BA.
$$

$GL(n, F)$ is open in $F^{n \times n}$, so $T_1 GL(n, F) \approx F^{n \times n}$. Linearizations of maps with domain $GL(n, F)$ can be computed using vector calculus-style directional derivatives: 

For sufficiently small $\epsilon$, matrices $A, B \in F^{n \times n}$ determine parametrized curves of invertible matrices
$$
A(\epsilon) :=  \idm + \epsilon \, A  \sands B(\epsilon) :=  \idm + \epsilon \, B.
$$

Given $C \in GL(n, F)$, linearity of matrix multiplication in $F^{n \times n}$ implies
$$
\eqa{
\Ad_{C}(B) &= \dep {C B (\epsilon) C^{-1}} \phantom{\sum} \\
&= \dep {C (\idm + \epsilon \, B) C^{-1}} \phantom{\sum} \\
&= \dep{(\idm + \epsilon \, C B C^{-1} )} \phantom{\sum} \\
&= C B C^{-1}.
}
$$

---

#### Second slide of the calculation of the Lie bracket of $G = GL(n, F)$

Setting $C = A(\epsilon) = \idm + \epsilon \, A$ and linearizing again, using 
$$
(\idm + \epsilon \, A)^{-1} = \idm - \epsilon \, A + {\cal O}(\epsilon^2),
$$
gives 

$$
\eqa{
\ad_A(B) &= \dep {\Ad_{A(\epsilon)}(B)x}  \phantom{\sum} \\
&= \dep {(\idm + \epsilon \, A)B (\idm + \epsilon \, A)^{-1}}  \phantom{\sum} \\
&= \dep {(\idm + \epsilon \, A)B \lp \idm - \epsilon \, A  + {\cal O}(\epsilon^2) \rp^{-1}}  \phantom{\sum} \\
&= \dep {\lp B + \epsilon \, (A B - B A) + {\cal O}(\epsilon^2) \rp}  \phantom{\sum} \\
&= A B - B A.
}
$$
