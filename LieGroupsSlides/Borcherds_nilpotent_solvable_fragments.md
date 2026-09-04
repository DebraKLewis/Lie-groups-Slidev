---
marp: true
---

$\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fh}{\mathfrak{h}}
\newcommand{\triv}{\{ 0 \}}$***Proof of Engel's Theorem*** (lifted verbatim modulo notation from Lecture 10 of 
[Borcherds' lecture notes](https://math.berkeley.edu/~reb/courses/261) for a course on Lie groups and algebras)

Suppose that $\fg$ is a Lie algebra of nilpotent endomorphisms of a non-zero finite dimensional vector space $V$. Then $V$ has a nonzero vector fixed by $\fg$.

*Proof:* We use induction on the dimension of $\fg$. The main step is to show that $\fg$ has an ideal $\fh$ of codimension 1 (unless $\fg = \triv$). So fix any proper nonzero subalgebra $\fh$ of $\fg$. Then $\fh$ acts on $\fg$ by nilpotent endomorphisms, and so acts on the vector space $\fg/\fh$ by nilpotent endomorphisms. By induction there is a nonzero element of $\fg/\fh$ killed by $\fh$, so if $\fh$ has codimension greater than 1 we can add this to $\fh$ and repeat until $\fh$ has codimension 1. In this case $\fh$ is an ideal of $\fg$.

Now look at the subspace $W$ of $V$ fixed by all elements of $\fh$, which is nonzero by induction. This is acted on by the 1-dimensional Lie algebra $\fg/\fh$ as $\fh$ is an ideal, and as $\fg/\fh$ acts by a nilpotent endomorphism of $W$ there must be a non-trivial fixed vector.

---

Now look at the subspace $W$ of $V$ fixed by all elements of $\fh$, which is nonzero by induction. This is acted on by the 1-dimensional Lie algebra $\fg/\fh$ as $\fh$ is an ideal, and as $\fg/\fh$ acts by a nilpotent endomorphism of $W$ there must be a non-trivial fixed vector.

This theorem shows that if $\fg$ is a Lie algebra of nilpotent endomorphisms of $V$, then there is a flag 
$$
0 = V_0 ⊂ V_1 ⊂ \cdots ⊂ V_n = V 
$$
such that $\fg$ acts trivially on each $V_i/V_{i−1}$. (Take $V_1$ to be the vectors fixed by $\fg$ and apply induction to $V/V_1$). In other words $V$ has a basis so that $\fg$ is strictly upper triangular. Conversely any strictly upper triangular Lie algebra consists of nilpotent endomorphisms.
$~$
Borcherds [Lecture 10](https://math.berkeley.edu/~reb/courses/261/10.pdf) includes results and commentary about the relationships between nilpotent Lie groups and nilpotent Lie algebras.

"we define a group to be nilpotent if it has a central series. There is nothing obviously nilpotent in a nilpotent group: the terminology comes from Lie algebras."

---

The exponential map of a connected, simply connected, nilpotent Lie group is a bijection.
$~$
*Rough sketch of proof:* Given $\xi, \eta \in \fg$, the Baker–Campbell–Hausdorff formula gives a series expansion (that doesn't always converge!) for $\zeta \in \fg$ such that
$$
\text{exp}(\xi) \text{exp}(\eta) = \text{exp}(\zeta).
$$

The first few terms of the B-C-H expansion are
$$
\textstyle {\zeta=\xi+\eta+ \frac 1 2 [\xi, \eta]+\frac 1 {12} ([\xi,[\xi, \eta]]-[\eta,[\xi,\eta]]) + \cdots }
$$

For nilpotent Lie algebras $\fg$ (over fields of characteristic 0), the  B-C-H expansion terminates after a finite number of terms, so can be used to give $\fg$ a group structure.

If $\fg$ is the Lie algebra of a connected, simply connected, nilpotent Lie group $G$, the induced group structure on $\fg$ agrees with that of $G$.
$~$
$~$

---

Borcherds [Lecture 11](https://math.berkeley.edu/~reb/courses/261/11.pdf) covers solvable Lie groups and algebras. Some fragments:

"a solvable group is one all of whose composition factors are abelian. The term comes from Galois theory, where a polynomial is solvable by radicals (and Artin–Schrier extensions in positive characteristic) if and only if its Galois group is solvable."

"There are obvious analogues of Lie’s theorems for connected solvable Lie groups of matrices. However for disconnected solvable groups the conclusions do not hold. For example, the symmetric group $S_3$ acting on its irreducible 2-dimensional representation has no eigenvectors. And the derived subgroup of a solvable finite group is usually not nilpotent: an example is the solvable symmetric group $S_4$ whose derived subgroup is the alternating group $A_4$."

"in some sense solvable connected Lie groups are not too far from nilpotent ones: they are given by sticking an abelian group on top of a nilpotent one. For (disconnected) finite groups, the solvable ones can be much more complicated than nilpotent ones."






