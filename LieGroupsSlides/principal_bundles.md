## Fiber bundles

Given be a connected space  $B$ with basepoint $b_0$, a surjective, continuous map $p : E → B$ is a *locally trivial fibration*, or *fiber bundle*, with *fiber* $\,F := p^{−1}(b_0)\,{}$  
if for every $x ∈ B$ there is an open neighborhood $U_x ⊂ B$ and a homeomorphism
$$
Ψ_{U_x} : p^{−1}(U_x) → U_x × F
$$
such that the following diagram commutes:

![h:220](Images/whiteSpace.png)![h:220](Images/whiteSpace.png)![h:220](Images/fiberBundleCommDiag.png)

$B$ is called the *base space* and $E$ is the *total space*. 

Fiber bundles generalize direct products.

---

A map (or “morphism”) of fiber bundles $\, Φ : (F_1, E_1, B_1) → (F_2, E_2, B_2\,{}$) 
is a pair of basepoint-preserving continuous maps 
$$
φ : B_1 → B_2  \qquad \mbox{and} \qquad \tilde φ : E_1 → E_2
$$
satisfying
$$
\begin{align}
E_1& \xrightarrow{\ \tilde φ\ } E_2 \\
p_1\downarrow\ & \qquad \downarrow p_2 \\ 
B_1& \xrightarrow{\ φ\ } B_2
\end{align} .
$$
<br>

A (local) *section* $\,s : U \subseteq B → E \, {}$ of a fiber bundle $\, p : E → B\,{}$ is a continuous map satisfying
$$
p ◦ s = \mbox{id}_B|_U.
$$

A fiber bundle $(F, E, B)$ is *trivial* if it isomorphic to the fibration $\, B×F → B$. 

---

### Examples of fiber bundles

- Vector bundles, with $F$ a vector space. Vector fields are sections of vector bundles.
- Covering spaces, with $F$ the group of deck transformations.  
Lifts are sections of covering spaces. 
- The M&ouml;bius band, with $B = S^1$ and $F = [-1, 1]$.
- Complex projective spaces are the base spaces of fiber bundles.   
$\, {\mathbb C} P^n \,{}$ is the orbit space of the diagonal action of $\, F = {\mathbb C} - \{0 \}\,{}$ by multiplication on $\, E = {\mathbb C}^{n+1} - \{ 0 \}$. Local section:
![h:150](Images/whiteSpace.png)![h:150](Images/whiteSpace.png)![h:150](Images/CPnSection.png)
- $B = {\mathbb C} P^n, \,{} E = S^{2n + 1}, \ {}$ and $F = S^1 \simeq \{ z \in {\mathbb C} : |z| = 1 \}$. 
Since ${\mathbb C} P^1 \simeq S^2$, for $n = 1$ this is the Hopf fibration.

---

## Principal bundles

A smooth  *principal $G$-bundle* is a fiber bundle $p : E → B$ with fiber $G$ satisfying

- $G$ is a Lie group acting freely on $E,$ with 
$$G \cdot z = p^{-1}(p(z)) \qquad \qquad \forall \ z \in E,$$ 
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; and free and transitive induced actions 
$$µ_x : p^{−1}(x) × G → p^{−1}(x) \qquad \qquad \forall \ x \in B$$ 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; on the fibers.
- There are equivariant local trivializations $\, ψ : p^{−1}(U) \xrightarrow{\simeq} U \times G, \, {}$ i.e.
$$
\begin{align}
p^{−1}(U) \times G & \xrightarrow{\ ψ \times \rm{id}_G\ } U \times G \times G \\
µ \downarrow\ & \qquad \downarrow {\scriptsize \rm{id}_U \times \rm{mult}} \\ 
p^{−1}(U)& \xrightarrow{\quad ψ\quad } U \times G
\end{align} 
$$

---

**Very important example**: &nbsp; If $E$ is a smooth manifold and $G$ is a compact Lie group acting freely and smoothly on $E$, then the projection $\, p : E → E/G\,{}$ is a principal $G$-bundle.
<br>

**A special case**: &nbsp; If $H$ is a compact subgroup of a Lie group $G$, then $\, p : G → G/H\,{}$ 
is a principal $H$-bundle.
<br>


The Hopf fibration $p\, : S^3 \to S^2 \, {}$ is a principal $SO(2)$-bundle, where we identify $S^1$ with rotations about a given axis.

---

An Ehresman connection on a principal bundle $E$ is a $G$-equivariant $\fg$-valued 1-form $\phi$ such that
$$
\iota_{\xi_M} \phi = \xi 
$$
for any $\xi \in \fg$.

Here $G$-equivariance means
$$
\rho(g)^*\phi = \Ad_g \circ \phi \qquad \forall \ g \in G.
$$
